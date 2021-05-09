import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfirmSenhaService {
  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  token = window.localStorage.getItem('tokenrecover')

  constructor(private http:HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token
   })
  }


  newpass(token, flag: String){
    return this.http.post(this.API+flag,token,this.httpOptions).pipe(take(1));
  }
}
