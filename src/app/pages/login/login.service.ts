import { Listuser } from '../../shared/listprofile/listprofle';
import { AlertTypes } from './../../shared/alert-modal.service';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, take } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  private token = window.localStorage.getItem('token')
  constructor(private http:HttpClient) {}
  usertype = new EventEmitter<boolean>()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
   })
  }

  create(login){
    return this.http.post(this.API+'/api/user/login',login).pipe(take(1));
  }

  listprofile(flag: string):Observable<Listuser>{
    return this.http.get<Listuser>(this.API+flag, this.httpOptions)
  }

}
