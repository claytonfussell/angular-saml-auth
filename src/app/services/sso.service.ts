import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SsoService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('http://localhost:1337/whoami', {withCredentials: true, observe: 'body', responseType: 'json'})
  }
  logout(): Observable<any> {
    return this.http.get('http://localhost:1337/logout', {withCredentials: true, observe: 'body', responseType: 'json'})
  }
}
