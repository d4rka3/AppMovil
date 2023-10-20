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

  
  getNameUser(): Observable<any> {
    const url = `${this.apiURL}/lista_users/`; // Asegúrate de que esta sea la URL correcta para obtener la lista de usuarios
    return this.http.get(url)
      .pipe(retry(3));
  }
}



