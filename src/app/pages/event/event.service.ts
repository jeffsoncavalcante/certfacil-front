import { Curso } from '../../shared/listcursos/homecursos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly API = 'http://certapi.redetuxnet.com.br:8000';
  private token = window.localStorage.getItem('token');

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }),
  };
  list(flag: string): Observable<Curso> {
    return this.http.get<Curso>(this.API + flag, this.httpOptions);
  }

  crete(flag:String,data){
    return this.http.post(this.API+flag,data,this.httpOptions)
  }
}
