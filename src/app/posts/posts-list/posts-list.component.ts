import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts:Array<any> = [];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().then(response => {
      this.posts = response;
    });
  }

}
