import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly APIBASE = 'http://localhost:8082'
  constructor(private httpcliente:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': ''
   })
  }
 
  create(register){
    console.log(register)
    return this.httpcliente.post(this.APIBASE+'/api/user/store', register, this.httpOptions).pipe(take(1));
  }
}
