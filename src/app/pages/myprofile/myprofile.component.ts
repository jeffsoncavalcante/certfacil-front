import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyprofileService } from './myprofile.service';
import { AlertModalService } from './../../shared/alert-modal.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  users: any=[]
  apelido
  email
  campus
  semestre
  id = window.localStorage.getItem('id')
  dados: any=[]


  constructor(private serviceprofile:MyprofileService, private fb: FormBuilder, private alertservice: AlertModalService) { }
  form: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.id,
      campus: [null, Validators.pattern('^[a-zA-Z ]+$')],
      semestre: [null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      apelido: [null, Validators.pattern('^[a-zA-Z ]+$')]
    })
    this.list()
  }


  list():void {
    this.serviceprofile.list('/api/user/perfil/').subscribe(
      data => {
        this.users = data.user
        this.apelido = Array.of(this.users.apelido)
        this.email = Array.of(this.users.email)
        this.campus = Array.of(this.users.campus)
        this.semestre = Array.of(this.users.semestre)
      },
      async error => {
        if(error.status === 401 ){
        await this.alertservice.showAlertDanger("Seção Expirou")
        window.location.href='/login'
      }
    }
    )
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

 update(){
   if(this.form.valid){
    this.serviceprofile.update(this.form.value,'/api/user/update').subscribe(
      data =>{
        this.alertservice.showAlertSuccess('Dados Alterados com Sucesso!')
        this.delay(1000)
        window.location.href="/myprofile"
      },
      error => this.alertservice.showAlertDanger('Erros ao realizar a alterações')
    )
   }
   else{
    this.alertservice.showAlertDanger('Erros ao realizar a alterações')
   }


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
