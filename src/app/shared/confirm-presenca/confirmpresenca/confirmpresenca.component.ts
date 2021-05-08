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
  constructor(public bsModalRef: BsModalRef, private service: ConfirmpresencaService) { }

  idjson = {"id": this.id_presenca}
  id = JSON.stringify(this.idjson)
  ngOnInit() {
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.bsModalRef.hide();
  }

  Confirmone(){

    this.service.create('/api/inscricao/activeattendanceone',this.id).subscribe(
      data =>{
        console.log(data)
      }
    )
  }

  Confirmtwo(){
    this.service.create('/api/inscricao/attendancetwo',this.id).subscribe()
  }
}
