import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeadermenuService {

  private readonly API = environment.API_BACKEND
  private token = window.localStorage.getItem('token')
  private id_token = window.localStorage.getItem('token')
  constructor(private http:HttpClient) {}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
 })
}

logout(token){
  return this.http.post(this.API+'/api/user/logout',token,this.httpOptions).pipe(take(1));
}

}
