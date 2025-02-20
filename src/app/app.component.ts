import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card1Component } from './components/card1/card1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
