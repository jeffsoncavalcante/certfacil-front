import { eventos } from '../../shared/listcursos/eventos.model';
import { MyeventsService } from './myevents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css'],
})
export class MyeventsComponent implements OnInit {
  evento: eventos[];
  id = window.localStorage.getItem('id');
  constructor(private service: MyeventsService) {}

  ngOnInit(): void {
    this.service
      .list('/api/inscricao/listfull/' + this.id)
      .subscribe((data) => {
        this.evento = data.eventos;
        console.log(data);
      });
  }
}
