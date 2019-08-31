import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private httpClient:HttpClient) { }

  get(url:string) {

    let headers:HttpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': 'abc'
    });

    return this.httpClient.get(url, { headers });
  }

  post(url:string, body?:any) {
    let headers:HttpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': 'abc'
    });

    return this.httpClient.post(url, body ,{ headers });
  }
}
