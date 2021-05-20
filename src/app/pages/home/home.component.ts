import { async } from '@angular/core/testing';
import { eventos } from '../../shared/listcursos/eventos.model';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  evento: eventos[]
  constructor(private service:HomeService, private alertservice: AlertModalService) { }


  array = {}

  typeuser = localStorage.getItem("usertype")
  buttons = false
  ngOnInit(): void{
    if (this.typeuser === "master"){
      this.buttons = true
    }
    this.service.list('/api/eventos/index').subscribe(
      data =>{
        console.log(data)
        this.evento = data.message;

      },
      async error => {
        console.log(error.status)
        if(error.status === 401 ){
          await this.alertservice.showAlertDanger("Seção Expirou")
          window.location.href='/login'
        }
      }
    )}

    delete(i){
      this.array  = {
        id: i
      }
      this.service.delete(this.array, '/api/eventos/delete').subscribe(
        (dados) => {
          console.log(dados)
          this.alertservice.showAlertSuccess('Evento Excluido com Sucesso');
          window.location.href='/home'
        },
        (error) => {
          console.log(error)
          this.alertservice.showAlertDanger('Evento não pode ser excluido, pois já contém inscritos');
        }
      );

    }

    Edit(i){
      window.localStorage.setItem('id_updateevent',i)
      window.location.href='/updateevent'
    }

}
