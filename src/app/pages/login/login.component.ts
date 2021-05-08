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


  ngOnInit(): void {

    this.form = this.fb.group({
      email: [null],
      password: [null]
    })
  }

  onSubmit(){
   if(this.form.valid){

     this.service.create(this.form.value).subscribe(
       async data =>{
         this.objeto = data
         if (this.objeto.token.length != null){
          window.localStorage.setItem("token",this.objeto.token)
          window.localStorage.setItem("id",this.objeto.id_user)

          this.getprofile()
         }
       },
       error => this.alertservice.showAlertDanger('Usuario e Senha Invalido')
     )
   }

  }


  getprofile(){

    this.service.listprofile('/api/user/perfil/').subscribe(
      data => {
        this.dados = data.user,
        window.localStorage.setItem("usertype",this.dados.tipo_usuario)
        window.localStorage.setItem("campus",this.dados.campus)
        window.localStorage.setItem("semestre",this.dados.semestre)
        window.location.href='/home'
      },
      error => {
        window.location.href='/login'
      }
    )

  }
}
