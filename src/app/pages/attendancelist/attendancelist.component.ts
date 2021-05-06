import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AttendancelistService } from './attendancelist.service';
import { Listevent } from './../../shared/attendancelist/list.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.css']
})
export class AttendancelistComponent implements OnInit {

  evento: Listevent[]
  constructor(private service:AttendancelistService, private AlertService: AlertModalService) { }



  ngOnInit(): void{
    this.service.list('/api/eventos/').subscribe(
      data =>{
        this.evento = data.eventos;
      }

    )}

    Chamada(){
      this.AlertService.showPresenca()
    }

}
