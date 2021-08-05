import { users } from './../listusers/listusers.model';
import { HeadermenuService } from './headermenu.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss'],
})
export class HeadermenuComponent implements OnInit {
  typeuser = window.localStorage.getItem('usertype');
  token = window.localStorage.getItem('token');
  profile = false;
  createevent = false;
  home = false;
  myevents = false;
  event = false;
  certificate = false;
  listpresent = false;
  sair = false;
  users = false;
  layoutevent = false
  form: any;

  constructor(private service: HeadermenuService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      id_token: this.token,
    });

    if (this.typeuser === 'master') {
        (this.home = true),
        (this.createevent = true),
        (this.listpresent = true),
        (this.profile = true),
        (this.sair = true),
        (this.users = true),
        (this.layoutevent = true)
    }
    if (this.typeuser === 'operador') {
      (this.home = true),
      (this.createevent = true),
      (this.listpresent = true),
      (this.profile = true),
      (this.sair = true),
      (this.layoutevent = true)
    }
    if (this.typeuser === 'palestrante') {
      (this.home = true), (this.profile = true), (this.myevents = true); (this.sair = true);
    }
    if (this.typeuser === 'participante') {
      (this.home = true),
        (this.event = true),
        (this.myevents = true),
        (this.profile = true);
        (this.sair = true);
    }
  }

  logout() {
    this.service.logout(this.form.value).subscribe(
      (data) => {
        window.location.href = '/index';
        window.localStorage.clear();
      },
      (error) =>  {
        window.location.href = '/index';
        window.localStorage.clear();
      }
    );
  }
}
