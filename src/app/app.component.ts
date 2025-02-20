import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home1Component } from './pages/test1/home1/home1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
