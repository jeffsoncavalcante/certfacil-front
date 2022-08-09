import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ValidaPasswordService {

  private readonly API = environment.API_BACKEND
  constructor(private http:HttpClient) {}

  create(token, flag: String){
    return this.http.post(this.API+flag,token).pipe(take(1));
  }
}
