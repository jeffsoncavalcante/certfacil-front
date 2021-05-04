import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/listprofile/datespofiles.model';
import { MyprofileService } from './myprofile.service';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  users: any=[]
  apelido
  email


  constructor(private servicelogin:MyprofileService) { }

  ngOnInit(): void {

    this.list()
  }

  list(){
    this.servicelogin.list('/api/user/perfil/').subscribe(
      data => {
        this.users = data.user
        this.apelido = Array.of(this.users.apelido)
        this.email = Array.of(this.users.email)
        console.log(this.users.id)

      },
      error => console.log(error)
    )
  }

}
