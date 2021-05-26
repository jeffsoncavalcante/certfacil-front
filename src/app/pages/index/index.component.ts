import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let logado = window.localStorage.getItem("logado")
    if(logado === 'true'){
      window.location.href='/home'
    }
  }

}
