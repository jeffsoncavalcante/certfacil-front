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
  constructor(private service: EventService) {}

  ngOnInit(): void {
    this.service.list('/api/eventos/').subscribe((data) => {
      this.evento = data.eventos;
    });
  }

  createevente(id_events){
    this.dados = {
      "id_usuario": window.localStorage.getItem("id"),
      "id_evento": id_events,
      "presenca_1": "0",
      "presenca_2": "0",
      "campus": window.localStorage.getItem("campus"),
      "semestre": window.localStorage.getItem("semestre"),
      "certificado": "0"

    }
    this.service.crete("/api/inscricao/store", this.dados).subscribe(
      data =>{
        console.log(data)
      }
    )
  }
}
