import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;


  constructor(private fb: FormBuilder, private service: LoginService,private alertservice: AlertModalService

    ) {}
  id
  teste
  objeto: any=[]
  dados: any=[]
  token
  logado

  ngOnInit(): void {
    let logado = window.localStorage.getItem("logado")
    if(logado === 'true'){
      window.location.href='/home'
    }
    this.form = this.fb.group({
      email: [null,[ Validators.required, Validators.email]],
      password: [null,Validators.required]
    })
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  async onSubmit(){
   if(this.form.valid){

     this.service.create(this.form.value).subscribe(
       async data =>{
         this.objeto = data
         if (this.objeto.token.length != null){
          this.token = this.objeto.token
          this.logado = true;
          window.localStorage.setItem("logado", this.logado)
          window.localStorage.setItem("token",this.objeto.token)
          window.localStorage.setItem("id",this.objeto.id_user)
          window.localStorage.setItem("expire", this.objeto.expires_in)

          await this.delay(1000);
          this.getprofile()
         }
       },
       error => this.alertservice.showAlertDanger('Usuario e Senha Invalido')
     )
   }else{
    this.alertservice.showAlertDanger('Prencha os Campos')
   }

  }


 getprofile(){

      this.service.listprofile('/api/user/perfil/', this.token).subscribe(
        data => {
          this.dados = data.user,
          window.localStorage.setItem("usertype",this.dados.tipo_usuario)
          window.localStorage.setItem("campus",this.dados.campus)
          window.localStorage.setItem("semestre",this.dados.semestre)
          window.localStorage.setItem("nome",this.dados.nome)
          window.location.href='/home'
        },
        error => {
          this.alertservice.showAlertDanger('Usuario e Senha Invalido')
        }
      )
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
