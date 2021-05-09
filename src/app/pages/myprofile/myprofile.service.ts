import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from 'src/app/shared/listprofile/list';


@Injectable({
  providedIn: 'root'
})
export class MyprofileService {
  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  private token = window.localStorage.getItem('token')
constructor(private http:HttpClient) { }
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
 })
}

list(flag: string):Observable<List>{
  return this.http.get<List>(this.API+flag, this.httpOptions)
}

update(dados,flag: string){
  return this.http.post(this.API+flag,dados, this.httpOptions)
}
}
