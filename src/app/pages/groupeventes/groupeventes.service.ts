import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupeventesService {

  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  private token = window.localStorage.getItem('token')
  constructor(private httpcliente:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
   })

  }

  listgrupo(){
    return this.httpcliente.get(this.API+'/api/user', this.httpOptions).pipe(take(1));
  }
}
