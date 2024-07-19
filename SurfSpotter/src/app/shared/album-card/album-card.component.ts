import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {

  @ContentChild('albumCardHeader') albumCardHeader!: TemplateRef<any>;
  @ContentChild('albumCardBody') albumCardBody!: TemplateRef<any>;
  
}
