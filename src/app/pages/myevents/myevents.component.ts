import { AlertModalService } from 'src/app/shared/alert-modal.service';

import { MyeventsService } from './myevents.service';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css'],
})


export class MyeventsComponent implements OnInit {
  evento: any = [];
  id = window.localStorage.getItem('id');
  buttondown = false;
  buttonpresenca = false;
  typeuser = window.localStorage.getItem('usertype');

  constructor(private service: MyeventsService, private alert: AlertModalService) {}

  ngOnInit(): void {
    if (this.typeuser === 'participante'){
      (this.buttonpresenca = true),
      (this.buttondown = true)

      this.service
      .list('/api/inscricao/listeventusers/' + this.id)
      .subscribe((data) => {
        this.evento = data;

        console.log(data);
      },
      async error => {
          if(error.status === 401  ){
          await this.alert.showAlertDanger("Seção Expirou")
          window.location.href='/login'
        }
      }
      );
    }
    if(this.typeuser === 'palestrante'){
      (this.buttondown = true)
      this.service
      .list('/api/inscricao/listeventteacher/' + this.id)
      .subscribe((data) => {
        this.evento = data;
        console.log(data);
      },
      async error => {
          if(error.status === 401  ){
          await this.alert.showAlertDanger("Seção Expirou")
          window.location.href='/login'
        }
      }
      );
    }




  }
  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  presenca(lib_presenca_1, lib_presenca_2, id){
    console.log(lib_presenca_1)
    window.localStorage.setItem("id_inscrito", id)
    window.localStorage.setItem("lib_presenca_1", lib_presenca_1)
    window.localStorage.setItem("lib_presenca_2", lib_presenca_2)
    this.delay(2000)
    this.alert.showPresenca()
  }
  downloadpdf(descricao, carga_horaria, data_inicio, presenca_2, presenca_1){
    if (this.typeuser === 'participante') {
    if (presenca_2==='1' && presenca_1==='1'){
      window.localStorage.setItem("descricao", descricao)
      window.localStorage.setItem("carga_horaria", carga_horaria)
      window.localStorage.setItem("data_inicio", data_inicio)
      this.delay(2000)
      window.location.href='/pdf'
    }
    else{
      this.alert.showAlertDanger("Certificado não liberado")
    }

  }if(this.typeuser === 'palestrante'){
    window.localStorage.setItem("descricao", descricao)
      window.localStorage.setItem("carga_horaria", carga_horaria)
      window.localStorage.setItem("data_inicio", data_inicio)
      this.delay(2000)
      window.location.href='/pdf'
  }


  }
}
