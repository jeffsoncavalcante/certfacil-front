
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
  buttonpresenca = true;
  typeuser = window.localStorage.getItem('usertype');

  constructor(private service: MyeventsService) {}

  ngOnInit(): void {
    this.service
      .list('/api/inscricao/listfull/' + this.id)
      .subscribe((data) => {
        this.evento = data;
        console.log(data);
      });

      if (this.typeuser === 'palestrante') {
        (this.buttondown = true)
      }
      if (this.typeuser === 'participante') {
        (this.buttonpresenca = true),
        (this.buttondown = true)
      }
  }
  presenca(){}
  downloadpdf(){
    this.service.emiterpdf.subscribe(
      data => console.log("oi")
    )
    console.log("oi")

  }
}
