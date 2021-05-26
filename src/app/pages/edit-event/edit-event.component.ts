import { eventos } from './../../shared/listcursos/eventos.model';
import { EditeventService } from './editevent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  ) { }
  form: FormGroup;

  event_id = window.localStorage.getItem("id_updateevent")
  dados: any = []
  listevent: any = []
  descricaoevent
  notaevent
  dataevent
  inicioevent
  ativoevent
  cargaevent

  array = {
    id: this.event_id
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.event_id,
      descricao: [null],
      nota: [null],
      data_inicio: [null],
      inicio: [null],
      ativo: [null, Validators.required],
      carga_horaria: [null, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
    this.list()
  }

  list(): void {
    this.service.list('/api/eventos/' + this.event_id).subscribe(
      data => {
        this.dados = data
        this.listevent = this.dados.evento
        this.descricaoevent = Array.of(this.listevent.descricao)
        this.notaevent = Array.of(this.listevent.nota)
        this.dataevent = Array.of(this.listevent.data_inicio)
        this.inicioevent = Array.of(this.listevent.inicio)
        this.cargaevent = Array.of(this.listevent.carga_horaria)
      },
      async error => {
        if(error.status === 401 ){
          await this.alertservice.showAlertDanger("Seção Expirou")
          window.localStorage.clear()
          window.location.href='/login'
        }
      }
    )
  }



  onSubmit() {
   // if(this.form.valid){
    this.service.update(this.form.value, '/api/eventos/update').subscribe(
      (dados) => {
        this.alertservice.showAlertSuccess('Evento Editado com Sucesso');
      },
      (error) => {
        this.alertservice.showAlertDanger('Erro ao Editar o Evento, Campo invalido');
      }
    );
  //}else{
   //  this.alertservice.showAlertDanger('Falha ao atualziar o Cadastro!')
 // }
  }
  verificaValidTouched(campo){
    return !this.form.get(campo).valid && this.form.get(campo).touched
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}
