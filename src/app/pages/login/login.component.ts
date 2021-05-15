import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder, private service: LoginService,private alertservice: AlertModalService

    ) {}
  id
  teste
  objeto: any=[]
  dados: any=[]
  token


  ngOnInit(): void {

    this.form = this.fb.group({
      email: [null],
      password: [null]
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
          window.localStorage.setItem("token",this.objeto.token)
          window.localStorage.setItem("id",this.objeto.id_user)
          await this.delay(1000);
          this.getprofile()
         }
       },
       error => this.alertservice.showAlertDanger('Usuario e Senha Invalido')
     )
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
}
