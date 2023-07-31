import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = '/api/';
  // baseUrl: string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  get<T>(
    url: string,
    params?: { [key: string]: number | string }
  ): Observable<T> {
    let queryParams = new HttpParams({ fromObject: params });
    return this.httpClient.get<T>(this.baseUrl + url, { params: queryParams });
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + url, body);
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + url, body);
  }

  delete<T>(url: string, body?: any) {
    return this.httpClient.delete<T>(this.baseUrl + url, body);
  }
}
