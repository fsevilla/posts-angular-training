import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos:Array<any>;
  params:any;
  missingAlbumId:boolean;

  constructor(
    private photoService:PhotoService,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(p => {
      this.params = p;
    });
  }

  ngOnInit() {

    if(!this.params.album) {
      this.missingAlbumId = true;
      return;
    }

    this.photoService.getPhotos(this.params.album).then((res) => {
      this.photos = res;
    });
  }
}
