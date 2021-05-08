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
  constructor(private service: EventService) {}

  ngOnInit(): void {
    this.service.list('/api/eventos/').subscribe((data) => {
      this.evento = data.eventos;
    });
  }
}
