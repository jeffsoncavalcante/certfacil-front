import { AlertModalService } from './../../alert-modal.service';
import { ConfirmpresencaService } from './confirmpresenca.service';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmpresenca',
  templateUrl: './confirmpresenca.component.html',
  styleUrls: ['./confirmpresenca.component.scss']
})
export class ConfirmpresencaComponent implements OnInit {

  id_presenca = window.localStorage.getItem('id_eventos')
  id_inscrito = window.localStorage.getItem('id_inscrito')
  constructor(public bsModalRef: BsModalRef, private service: ConfirmpresencaService,
    private alert: AlertModalService
    ) { }

  idjson = {"id": this.id_presenca}
  id = JSON.stringify(this.idjson)
  dados: any=[]
  idjsoniscrtio = {
    "id": this.id_inscrito
  }
  idinscrito = JSON.stringify (this.idjsoniscrtio)
  typeuser = window.localStorage.getItem('usertype');
  buttonpresencaone = false
  buttonpresncatwo = false
  buttonactivepresencaone = false
  buttonactivepresencatwo = false
  erro : any=[]
  lib_presenca_1=  window.localStorage.getItem("lib_presenca_1")
  lib_presenca_2 = window.localStorage.getItem("lib_presenca_2")



  ngOnInit() {
    if (this.typeuser === 'master') {
      (this.buttonactivepresencaone = true), (this.buttonactivepresencatwo = true)
    }
    if (this.typeuser === 'participante' && this.lib_presenca_1 === '1') {
      (this.buttonpresencaone = true)
    }
    if (this.typeuser === 'participante' && this.lib_presenca_2 === '1') {
      (this.buttonpresncatwo = true)
    }
  }

  onClose() {
    this.confirmAndClose(false);
    if (this.typeuser === 'master') {
      window.location.href='/attendancelist'
    }


  }

  private confirmAndClose(value: boolean) {
    this.bsModalRef.hide();
    if (this.typeuser === 'master') {
      window.location.href='/attendancelist'
    }
    else{
      window.location.href='/myevents'
    }
  }

  Ativeone(){

    this.service.create('/api/inscricao/activeattendanceone',this.id).subscribe(
      data =>{
        console.log(this.dados)
        this.dados = data
        if (this.dados.message === 'true'){
          this.alert.showAlertSuccess("Primeira lista liberada")
        }else{
          this.alert.showAlertDanger("Erro ao liberar lista")
        }
      },
      error =>{
        this.alert.showAlertDanger("Erro ao liberar lista, Não possui participantes inscritos")
      }
    )
  }

  Ativetwo(){
    this.service.create('/api/inscricao/activeattendancethow',this.id).subscribe(
      data =>{
        this.dados = data
        console.log(this.dados)
        if (this.dados.message === 'true'){
          this.alert.showAlertSuccess("Primeira lista liberada")
        }else{
          this.alert.showAlertDanger("Erro ao liberar lista")
        }
      },
      error => {
        this.alert.showAlertDanger("Erro ao liberar lista, Não possui participantes inscritos")
      }
    )
  }

  Confirmone(){

    this.service.create('/api/inscricao/attendanceone',this.idinscrito).subscribe(
      data =>{
        this.dados = data
        console.log(this.dados)
        if (this.dados.message === 'true'){
          this.alert.showAlertSuccess("Primeira presença confirmada")
        }else{
          this.alert.showAlertDanger("Erro ao confirma a presença")
        }
      }, error => {
        this.erro = error.error
        this.alert.showAlertDanger(this.erro.message)
      }
    )
  }

  Confirmtwo(){
    this.service.create('/api/inscricao/attendancetwo',this.idinscrito).subscribe(
      data =>{
        this.dados = data
        console.log(this.dados)
        if (this.dados.message === 'true'){
          this.alert.showAlertSuccess("Segunda presença confirmada")
        }else{
          this.alert.showAlertDanger("Erro ao confirma a presença")
        }
      },
      error => {
        this.erro = error.error
        this.alert.showAlertDanger(this.erro.message)
      }
    )
  }
}
