import { inject, Injectable } from '@angular/core';
import { environment } from './enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient);
  url = environment.url;
  private token: string | null = null;

  constructor() {}

  login(password: string): Observable<any>{
    const body = { password};
    return this.http.post(`${this.url}api/auth/login`, body);
  }
}
