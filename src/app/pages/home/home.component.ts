import { CreateeventComponent } from './../createevent/createevent.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  typeuser = window.localStorage.getItem('usertype')
  profile = false
  createevent = false
  home = false
  myevents = false
  event = false
  certificate =false
  listpresent= false

  constructor() { }

  ngOnInit(): void {
    if(this.typeuser==="master"){
      this.home=true,
      this.createevent=true,
      this.listpresent=true,
      this.profile=true
    }
    if(this.typeuser==="palestrante"){
      this.home=true,
      this.certificate=true,
      this.profile=true
    }
    if(this.typeuser==="participante"){
      this.home=true,
      this.event=true,
      this.myevents=true,
      this.profile=true
    }
  }

}
