import { AlertTypes } from './../../shared/alert-modal.service';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  constructor(private http:HttpClient) {}
  usertype = new EventEmitter<boolean>()

  create(login){
    return this.http.post(this.API+'/api/user/login',login).pipe(take(1));

  }

}
