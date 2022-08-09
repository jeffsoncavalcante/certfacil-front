import { Listpresenca } from '../../shared/attendancelist/listpresenca';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AttendancelistService {

  private readonly API = environment.API_BACKEND
  private token = window.localStorage.getItem('token')

constructor(private http: HttpClient) {}
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this.token
 })
}
  list (flag: string): Observable<Listpresenca>{
    return this.http.get<Listpresenca>(this.API+flag, this.httpOptions)
  }


}
