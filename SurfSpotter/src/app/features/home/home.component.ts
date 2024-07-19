import { Component } from '@angular/core';
import { AlbumCardComponent } from '../../shared/album-card/album-card.component';
import { NgFor } from '@angular/common';
import { HomeAuthButtonComponent } from "../../auth/home-auth-button/home-auth-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, AlbumCardComponent, HomeAuthButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  placeholder_recentAlbums = Array(4).fill(0);
  
}
