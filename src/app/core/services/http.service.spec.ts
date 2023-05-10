import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  const baseUrl: string = 'http://localhost:3000';

  const httpClientMock = {
    get: jest.fn().mockReturnValue(of()),
    post: jest.fn().mockReturnValue(of()),
    put: jest.fn().mockReturnValue(of()),
    delete: jest.fn().mockReturnValue(of()),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientMock }],
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get', () => {
    const url = 'get';
    service.get(url);
    expect(httpClientMock.get).toHaveBeenCalledWith(baseUrl + url);
  });

  it('should call post', () => {
    const url = 'post';
    const body = {};
    service.post(url, body);
    expect(httpClientMock.post).toHaveBeenCalledWith(baseUrl + url, body);
  });

  it('should call put', () => {
    const url = 'put';
    const body = {};
    service.put(url, body);
    expect(httpClientMock.put).toHaveBeenCalledWith(baseUrl + url, body);
  });

  it('should call delete', () => {
    const url = 'delete';
    const body = {};
    service.delete(url, body);
    expect(httpClientMock.delete).toHaveBeenCalledWith(baseUrl + url, body);
  });
});
