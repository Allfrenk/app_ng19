import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card1Component } from './components/card1/card1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor(private renderer: Renderer2) {}
  // Renderer2: Viene utilizzato per manipolare in sicurezza il DOM, aggiungendo o rimuovendo le classi necessarie.

  ngOnInit() {
    this.renderer.addClass(document.body, 'light-theme');
  }

  // toggleTheme(): Inverte lo stato del tema e aggiorna la classe sul <body>, in modo che gli stili definiti in theme.scss vengano applicati correttamente.
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.renderer.removeClass(
      document.body,
      this.isDarkTheme ? 'light-theme' : 'dark-theme'
    );
    this.renderer.addClass(
      document.body,
      this.isDarkTheme ? 'dark-theme' : 'light-theme'
    );
  }
}
