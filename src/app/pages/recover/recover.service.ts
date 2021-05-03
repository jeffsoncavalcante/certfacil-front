import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

private readonly API = 'http://certapi.redetuxnet.com.br:8000'
constructor(private http:HttpClient) {}


recover(recover){
  return this.http.post(this.API+'/api/user/reset',recover).pipe(take(1));
}

}
