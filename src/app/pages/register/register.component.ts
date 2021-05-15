import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  err: any=[]
  sucess: any=[]
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
    documento: [null, Number],
    campus: [null],
    celular: [null, Number],
    semestre: [null, Number]
    })
  }
  onSubmit(){
    console.log(this.form.value)
 //if(this.form.valid){
    console.log(this.form.value)
      this.service.create(this.form.value).subscribe(
        data => {
          this.sucess = data
          console.log(this.sucess)
          if(this.sucess.message === "CREATED"){
            this.alertservice.showAlertSuccess('Cadastro efetuado com Sucesso'),
            window.location.href='/login'
          }else{
            this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!')
          }

        },
        error => {
          this.err = error
          this.alertservice.showAlertDanger('Falha ao realizar o Cadastro! Status: '+this.err.status)
        }
      )
 // }else{
    this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!')
  //}
  }
}
