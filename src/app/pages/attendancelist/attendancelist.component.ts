import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AttendancelistService } from './attendancelist.service';
import { Listevent } from '../../shared/attendancelist/list.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.css']
})
export class AttendancelistComponent implements OnInit {



  evento: Listevent[]
  constructor(private service:AttendancelistService, private AlertService: AlertModalService) { }



  ngOnInit(): void{


    this.service.list('/api/eventos/index').subscribe(
      data =>{
        this.evento = data.message;
      },
      async error => {
        if(error.status === 401 ){
          await this.AlertService.showAlertDanger("Seção Expirou")
          window.localStorage.clear()
          window.location.href='/login'
        }
      }

    )}

    Chamada(i){
      window.localStorage.setItem('id_eventos',i)
      this.AlertService.showPresenca()
    }

}
