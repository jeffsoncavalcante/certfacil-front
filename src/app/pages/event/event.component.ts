import { AlertModalService } from './../../shared/alert-modal.service';
import { eventos } from '../../shared/listcursos/eventos.model';
import { EventService } from './event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  evento: eventos[];
  dados
  erro: any=[]
  constructor(private service: EventService, private alert:AlertModalService) {}

  ngOnInit(): void {
    this.service.list('/api/eventos/index').subscribe((data) => {
      this.evento = data.message;
    },
    async error => {
      if(error.status === 401 ){
        await this.alert.showAlertDanger("Seção Expirou")
        window.location.href='/login'
      }
    }
    );
  }

  createevente(id_events){
    this.dados = {
      "id_usuario": window.localStorage.getItem("id"),
      "id_evento": id_events,
      "presenca_1": "0",
      "presenca_2": "0",
      "campus": window.localStorage.getItem("campus"),
      "semestre": window.localStorage.getItem("semestre"),
      "certificado": "0",
      "lib_presenca_1": "0",
      "lib_presenca_2": "0"
    }
    this.service.crete("/api/inscricao/store", this.dados).subscribe(
      data =>{
        this.erro =data
        if(this.erro.message === 'Usuário Já inscrito no Evento'){
          this.alert.showAlertDanger("Usuário Já inscrito no Evento")
        }else{
        this.alert.showAlertSuccess("Inscrição realizada com Sucesso")
        }

      },
      error =>{
        this.alert.showAlertDanger("Falha a se Inscrever"+error)
      }
    )
  }
}
