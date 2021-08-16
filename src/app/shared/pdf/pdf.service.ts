import { Modelos } from './../../shared/listmodelo/listmodelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  private token = window.localStorage.getItem('token')
  constructor(private httpcliente:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
   })

  }

  listmodelo(flag:any){
    return this.httpcliente.get<Modelos>(this.API+flag, this.httpOptions).pipe(take(1));
  }
}
