import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getNameUser(): Observable<any> {
    return this.http.get(this.apiURL + 'api/lista_users/')
      .pipe(retry(3));
  }
}
 


