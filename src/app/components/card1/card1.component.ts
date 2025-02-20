import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-card1',
  imports: [ThemeToggleComponent],
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.scss',
})
export class Card1Component {}
