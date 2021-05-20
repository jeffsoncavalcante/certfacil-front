import { eventos } from './../../shared/listcursos/eventos.model';
import { EditeventService } from './editevent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  constructor(
    private service: EditeventService,
    private fb: FormBuilder,
    private alertservice: AlertModalService
  ) {}
  form: FormGroup;

  event_id = window.localStorage.getItem("id_updateevent")
  dados: any=[]
  listevent: any=[]
  descricaoevent
  notaevent
  dataevent
  inicioevent
  ativoevent
  cargaevent

  array  = {
    id: this.event_id
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.event_id,
      descricao: [null],
      nota: [null],
      data_inicio: [null],
      inicio: [null],
      ativo: '0',
      carga_horaria: [null],
    });
    this.list()
  }

  list():void {
    this.service.list('/api/eventos/'+this.event_id).subscribe(
      data => {
        this.dados = data
        this.listevent = this.dados.evento
        this.descricaoevent = Array.of(this.listevent.descricao)
        this.notaevent = Array.of(this.listevent.nota)
        this.dataevent = Array.of (this.listevent.data_inicio)
        this.inicioevent = Array.of (this.listevent.inicio)
        this.cargaevent = Array.of(this.listevent.carga_horaria)
        console.log(this.descricaoevent)
      },
      async error => {
        console.log(error.status)
        if(error.status === 401 ){
          await this.alertservice.showAlertDanger("Seção Expirou")
          window.location.href='/login'
        }
      }
    )
  }

  onSubmit() {
    console.log(this.form.value)
    this.service.update(this.form.value, '/api/eventos/update').subscribe(
      (dados) => {
        console.log(dados)
        this.alertservice.showAlertSuccess('Evento Editado com Sucesso');
      },
      (error) => {
        this.alertservice.showAlertDanger('Erro ao Editar o Evento');
      }
    );
  }

}
