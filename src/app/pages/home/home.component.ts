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
      erro => console.log(erro)
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
          this.alertservice.showAlertDanger('Erro ao Excuir o Evento');
        }
      );

    }

    Edit(i){
      window.localStorage.setItem('id_updateevent',i)
      window.location.href='/updateevent'
    }

}
