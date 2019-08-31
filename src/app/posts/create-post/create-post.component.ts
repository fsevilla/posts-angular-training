import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post:any = {};
  isSending:boolean;

  constructor(
    private postService:PostService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm() {
    if(this.isFormValid()) {
      console.log('Va a crear el post');
      this.isSending = true;
      this.postService.createPost(this.post).then(response => {
        console.log('Post creado', response);
        this.router.navigate(['/posts']);
        this.isSending = false;
      });
    } else {
      console.error('Faltan datos');
    }
  }

  isFormValid() {
    if(this.post.title && this.post.body) {
      return true;
    }
    return false;
  }

}
