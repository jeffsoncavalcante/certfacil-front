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
  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
  onSubmit(){
 //if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        async  data => {
          this.sucess = data
          if(this.sucess.message === "CREATED"){
           await this.alertservice.showAlertSuccess('Cadastro efetuado com Sucesso'),
           this.delay(4000)
            window.location.href='/login'
          }else{
            await this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!')
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
