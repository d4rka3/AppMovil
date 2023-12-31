import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  
  getNameuser(): Observable<any> {
    return this.http.get(this.apiURL+'/lista_users')
      .pipe(retry(3))
  }
}



