import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'albums/:albumId/photos', component: PhotosComponent },
  { path: 'posts', component: PostsComponent, children: [
    { path: '', component: PostsListComponent },
    { path: 'create', component: CreatePostComponent },
    { path: ':postId', component: PostDetailsComponent }
  ] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
