import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidaPasswordService {

  private readonly API = 'http://certapi.redetuxnet.com.br:8000'
  constructor(private http:HttpClient) {}

  create(token, flag: String){
    return this.http.post(this.API+flag,token).pipe(take(1));
  }
}
