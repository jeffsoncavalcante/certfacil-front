import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateeventService {

  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  private token = window.localStorage.getItem('token')
  constructor(private httpcliente:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
   })

  }
  createevent(event,flag: string){
    return this.httpcliente.post(this.API+flag, event, this.httpOptions).pipe(take(1));
  }
  getPalestrante(flag: string){
    return this.httpcliente.get(this.API+flag, this.httpOptions).pipe(take(1));
  }
}
