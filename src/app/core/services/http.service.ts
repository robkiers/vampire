import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string) {
    return this.httpClient.get<T>(this.baseUrl + url);
  }

  post<T>(url: string, body: any) {
    return this.httpClient.post<T>(this.baseUrl + url, body);
  }

  put<T>(url: string, body: any) {
    return this.httpClient.put<T>(this.baseUrl + url, body);
  }

  delete<T>(url: string, body?: any) {
    return this.httpClient.delete<T>(this.baseUrl + url, body);
  }
}
