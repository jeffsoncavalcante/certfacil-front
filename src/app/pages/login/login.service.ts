import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = 'http://186.195.8.9:8000'
  constructor(private http:HttpClient) {}


  create(login){
    return this.http.post(this.API+'/api/user/login',login).pipe(take(1));
  }

}
