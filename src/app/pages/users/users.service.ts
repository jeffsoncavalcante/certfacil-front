import { take } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly APIBASE = 'http://certapi.redetuxnet.com.br:8000'
  constructor(private httpcliente:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
   })
  }

  create(register, flag: string){
    return this.httpcliente.post(this.APIBASE+flag, register, this.httpOptions).pipe(take(1));
  }
}
