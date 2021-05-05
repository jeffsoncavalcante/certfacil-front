import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  id
  dados: any=[]


  constructor(private serviceprofile:MyprofileService, private fb: FormBuilder, private alertservice: AlertModalService) { }
  form: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      Confirm: [null],
      Password: [null]
    })
    this.list()
  }


  list():void {
    this.serviceprofile.list('/api/user/perfil/').subscribe(
      data => {
        this.users = data.user
        this.apelido = Array.of(this.users.apelido)
        this.email = Array.of(this.users.email)


      },
      error => console.log(error)
    )
  }

  update(){
    this.serviceprofile.update(this.form.value,'/api/user/resetPassword').subscribe(
      data =>{
        this.alertservice.showAlertSuccess('Usuario e Senha Invalido')
      },
      error => this.alertservice.showAlertDanger('Usuario e Senha Invalido')
    )
  }

}
