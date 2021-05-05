import { eventos } from '../../shared/listcursos/eventos.model';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  evento: eventos[]
  constructor(private service:HomeService) { }



  ngOnInit(): void{
    this.service.list('/api/eventos/').subscribe(
      data =>{
        this.evento = data.eventos;
      }

    )}

}
