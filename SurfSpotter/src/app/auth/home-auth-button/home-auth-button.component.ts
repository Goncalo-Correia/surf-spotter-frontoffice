import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-auth-button',
  standalone: true,
  imports: [NgIf, AsyncPipe, RouterLink],
  templateUrl: './home-auth-button.component.html',
  styleUrl: './home-auth-button.component.css'
})
export class HomeAuthButtonComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  
}
