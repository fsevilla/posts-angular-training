import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  getPhotos(albumId?:number):Promise<any> {
    let url = `${environment.jsonAPI}photos`;

    if(albumId) {
      url = `${url}?albumId=${albumId}`;
    }

    return this.http.get(url).toPromise();
  }
}
