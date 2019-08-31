import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlbumService } from './album.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums:Array<Album> = [];
  error:boolean;
  isLoading:boolean;

  constructor(
    private albumService:AlbumService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.albumService.getAlbums()
    .subscribe(
      response => {
        this.albums = response;
        this.isLoading = false;
      },
      err => {
        console.error('Failed!', err);
        this.error = true;
        this.isLoading = false;
      });
  }

  onSelectAlbum(albumId:number) {
    console.log('Selected album ID: ', albumId);
    const url = `/photos`;
    this.router.navigate([url], {
      queryParams: {
        album: albumId
      }
    });
  }
  
}
