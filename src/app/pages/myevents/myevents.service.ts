import { Curso } from '../../shared/listcursos/homecursos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Modelos } from 'src/app/shared/listmodelo/listmodelo';

@Injectable({
  providedIn: 'root',
})
export class MyeventsService {
  private readonly API = 'http://certapi.redetuxnet.com.br:8000';
  private token = window.localStorage.getItem('token');
  emiterpdf = new EventEmitter()


  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }),
  };
  list(flag: string) {
    return this.http.get(this.API + flag, this.httpOptions);
  }

  certicado(flag: string, data){
    return this.http.post(this.API+flag,data, this.httpOptions )
  }

  buttonpdf(descricao: String){
      this.emiterpdf.emit(descricao)
  }
  listmodelo(flag:any){
    return this.http.get<Modelos>(this.API+flag, this.httpOptions).pipe(take(1));
  }
}
