import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { CustomHttpService } from '../shared/services/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient:HttpClient,
    private customHttp:CustomHttpService
  ) { }

  getPosts():Promise<any> {
    const url = `${environment.mockableAPI}posts`;
    return this.customHttp.get(url).toPromise();
  }

  getPostDetails(postId:number):Promise<any> {
    const url = `${environment.mockableAPI}posts/${postId}`;

    return this.customHttp.get(url).pipe(
      map((response:any) => {
        response.body += '<a href="http://google.com" target="_new">hola mundo!</span>';
        return response;
      })
    ).toPromise();
  }

  createPost(post:any):Promise<any> {
    const url = `${environment.mockableAPI}posts`;
    let data = {
      userId: 1,
      title: post.title,
      body: post.body
    };

    return this.customHttp.post(url,data).toPromise();
  }
}
