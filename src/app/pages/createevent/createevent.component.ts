import { CreateeventService } from './createevent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  constructor(private service: CreateeventService,
    private fb: FormBuilder,
    private alertservice: AlertModalService
    ) { }
    form: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      descricao:[null],
      nota:[null],
      data_inicio: [null],
      inicio: [null],
      id_usuario:[null],
      ativo: '0'
    })
  }

  onSubmit(){
    this.service.createevent(this.form.value,'/api/eventos/store').subscribe(
      dados =>{
        this.alertservice.showAlertSuccess("Evento Cadastrado com Sucesso")
      },
      error =>{
        this.alertservice.showAlertDanger("Erro ao Cadastrar o Evento")
      }
    )
  }

}
