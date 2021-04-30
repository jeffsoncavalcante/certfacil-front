import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

private readonly API = 'http://186.195.8.9:8000'
constructor(private http:HttpClient) {}


recover(recover){
  return this.http.post(this.API+'/api/user/reset',recover).pipe(take(1));
}

}
