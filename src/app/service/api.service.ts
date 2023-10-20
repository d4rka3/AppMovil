import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<any> {
    return this.http.get(this.apiURL + 'lista_docentes/')
      .pipe(retry(3));
  }

  getEstudiantes(): Observable<any> {
    return this.http.get(this.apiURL + 'lista_estudiantes/')
      .pipe(retry(3));
  }
}
