import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AlbumsComponent } from './features/albums/albums.component';
import { AlbumComponent } from './features/album/album.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Albums', component: AlbumsComponent },
    { path: 'Album', component: AlbumComponent },
];
