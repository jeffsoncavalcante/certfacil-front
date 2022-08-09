import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecoverService {

private readonly API = environment.API_BACKEND
constructor(private http:HttpClient) {}


recover(recover){
  return this.http.post(this.API+'/api/user/reset',recover).pipe(take(1));
}

}
