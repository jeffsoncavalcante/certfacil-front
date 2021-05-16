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
    this.service
      .list('/api/inscricao/listeventusers/' + this.id)
      .subscribe((data) => {
        this.evento = data;
        console.log(data);
      });

      if (this.typeuser === 'palestrante') {
        (this.buttondown = true)
      }
      if (this.typeuser === 'participante') {
        (this.buttonpresenca = true)
        if (this.evento.certificado === '1'){
          (this.buttondown = true)
        }

      }

  }
  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  presenca(lib_presenca_1, lib_presenca_2){
    window.localStorage.setItem("lib_presenca_1", lib_presenca_1)
    window.localStorage.setItem("lib_presenca_2", lib_presenca_2)
    this.delay(2000)
    this.alert.showPresenca()
  }
  downloadpdf(descricao, carga_horaria, data_inicio){
    window.localStorage.setItem("descricao", descricao)
    window.localStorage.setItem("carga_horaria", carga_horaria)
    window.localStorage.setItem("data_inicio", data_inicio)
    this.delay(2000)
    window.location.href='/pdf'

  }
}
