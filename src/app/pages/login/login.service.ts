
import { AlertTypes } from './../../shared/alert-modal.service';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, take } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { List } from 'src/app/shared/listprofile/list';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private readonly API = environment.API_BACKEND
  constructor(private http:HttpClient) {}
  usertype = new EventEmitter<boolean>()

  httpOptions = {}

  create(login){
    return this.http.post(this.API+'/api/user/login',login).pipe(take(1));
  }

  listprofile(flag: string, dados):Observable<List>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+dados
     })
    }

    return this.http.get<List>(this.API+flag, this.httpOptions)
  }

}
