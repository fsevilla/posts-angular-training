import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

export interface Post {
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postId:number;
  post:Post;
  loadedData:boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private postService:PostService
    ) {
    this.activatedRoute.params.subscribe(pars => {
      this.postId = pars.postId;
    });
  }

  ngOnInit() {
    console.log('Will load post', this.postId);
    this.postService.getPostDetails(this.postId)
      .then(res => {
        console.log('Post', res);
        this.post = res;
        this.loadedData = true;
      })
      .catch(err => {
        console.error('Failed ', err);
      });
  }

}
