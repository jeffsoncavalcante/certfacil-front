import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private service: RegisterService,
    private alertservice: AlertModalService
    ) { }

  ngOnInit(): void {
     this.form = this.fb.group({
    email:[null],
    password: [null],
    confirm: [null],
    nome:[null],
    apelido: [null],
    tipo_usuario:[null],
    documento: [null],
    campus: [null],
    celular: [null]
    })
  }
  register(){
   if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        data => {
          this.alertservice.showAlertSuccess('Cadastro efetuado com Sucesso'),
          window.location.href='/login'
        },
        error => this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!')
      )
    }
  }
}
