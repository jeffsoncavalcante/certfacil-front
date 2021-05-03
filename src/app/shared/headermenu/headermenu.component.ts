import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent implements OnInit {

  typeuser = window.localStorage.getItem('usertype')
  profile = false
  createevent = false
  home = false
  myevents = false
  event = false
  certificate =false
  listpresent= false

  constructor() { }

  ngOnInit() {
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
