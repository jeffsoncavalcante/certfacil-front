import { Curso } from '../../shared/listcursos/homecursos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly API = environment.API_BACKEND
  private token = window.localStorage.getItem('token')

constructor(private http: HttpClient) {}
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
 })
}
  list (flag: string): Observable<Curso>{
    return this.http.get<Curso>(this.API+flag, this.httpOptions)
  }

  delete(event,flag: string){
    return this.http.post(this.API+flag, event, this.httpOptions).pipe(take(1));
  }
}
