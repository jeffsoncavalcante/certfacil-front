import { Users } from './../../shared/listusers/listusers';
import { Modelo } from './../../shared/listmodelo/listmodelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CreateeventService {

  private readonly API = environment.API_BACKEND
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

  listuser(): Observable<Users>{
    return this.httpcliente.get<Users>(this.API+'/api/user', this.httpOptions).pipe(take(1));
  }

  listmodelo(): Observable<Modelo>{
    return this.httpcliente.get<Modelo>(this.API+'/api/modelo/index', this.httpOptions).pipe(take(1));
  }
}
