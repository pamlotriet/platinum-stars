import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, RouterOutlet],
  styleUrl: './navbar.component.css',
  templateUrl: './navbar.component.html'
})


export class NavbarComponent {
  constructor(private router:Router){}

  isOtherLinkActive(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== '/' 
  }
}
