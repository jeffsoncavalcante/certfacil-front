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

  constructor(private fb: FormBuilder, private service: LoginService) { 
    
  }

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
          window.location.href='/homemaster'
         }
       },
       error => alert("Usuario e Senha Invalido")
     )
   }
  }
}
