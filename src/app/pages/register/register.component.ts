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
    celular: [null],
    semestre: [null]
    })
  }
  onSubmit(){
 // if(this.form.valid){
    console.log(this.form.value)
      this.service.create(this.form.value).subscribe(
        data => {
          console.log(data)
          this.alertservice.showAlertSuccess('Cadastro efetuado com Sucesso'),
          window.location.href='/login'
        },
        error => {
          this.err = error
          this.alertservice.showAlertDanger('Falha ao realizar o Cadastro! Status: '+this.err.status)
        }
      )
  // }
  }
}
