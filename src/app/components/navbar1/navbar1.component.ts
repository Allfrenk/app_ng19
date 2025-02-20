import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  imports: [],
  templateUrl: './navbar1.component.html',
  styleUrl: './navbar1.component.scss',
})
export class Navbar1Component {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
