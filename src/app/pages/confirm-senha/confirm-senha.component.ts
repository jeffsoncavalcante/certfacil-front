import { ConfirmSenhaService } from './confirm-senha.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-confirm-senha',
  templateUrl: './confirm-senha.component.html',
  styleUrls: ['./confirm-senha.component.scss']
})
export class ConfirmSenhaComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private alertservice: AlertModalService,
    private service: ConfirmSenhaService

    ) {}
  form: FormGroup
  dados: any=[]
  token = window.localStorage.getItem('tokenrecover')

  ngOnInit() {
    this.form = this.fb.group({
      password: [null],
      confirm: [null],
      token_email: this.token
    })
  }

  valid(){
    this.service.newpass(this.form.value,"/api/user/resetPassword").subscribe(
      data =>{
        this.dados = data
        if(this.dados.message === 'true'){
          this.alertservice.showAlertSuccess("Senha Recuperada com Sucesso !")
          window.location.href='/login'
        }

      })
      error =>{
        this.alertservice.showAlertDanger("Erro ao recuperar a senha"+error)
      }
  }

}
