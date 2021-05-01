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

  constructor(private fb: FormBuilder, private service: LoginService,private alertservice: AlertModalService) {

  }
  id
  objeto: any=[]


  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null],
      password: [null]
    })
  }
  onSubmit(){
   if(this.form.valid){
     console.log('submit')

     this.service.create(this.form.value).subscribe(
       data =>{
         this.objeto = data
         if (this.objeto.token.length != null){
          window.localStorage.setItem("token",this.objeto.token)
          window.localStorage.setItem("id",this.objeto.id)
          window.localStorage.setItem("usertype","palestrante")
          window.location.href='/home'
         }
       },
       error => this.alertservice.showAlertDanger('Usuario e Senha Invalido')
     )
   }

  }
}
