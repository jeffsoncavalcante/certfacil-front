import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GroupeventesService {

  private readonly API = environment.API_BACKEND
  private token = window.localStorage.getItem('token')
  constructor(private httpcliente:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
   })

  }
  crete(flag:String,data){
    return this.httpcliente.post(this.API+flag,data,this.httpOptions)
  }

  listgrupo(){
    return this.httpcliente.get(this.API+'/api/user', this.httpOptions).pipe(take(1));
  }
}
