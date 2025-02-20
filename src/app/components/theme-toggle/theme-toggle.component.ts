import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  // Renderer2: Viene utilizzato per manipolare in sicurezza il DOM, aggiungendo o rimuovendo le classi necessarie.

  ngOnInit(): void {
    // Esegui il codice che usa document solo se siamo in ambiente browser
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'light-theme');
    }
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) return;
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
