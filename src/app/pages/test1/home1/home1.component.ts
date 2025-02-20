import { Component } from '@angular/core';
import { Card1Component } from '../../../components/card1/card1.component';
import { Navbar1Component } from '../../../components/navbar1/navbar1.component';

@Component({
  selector: 'app-home1',
  imports: [Card1Component, Navbar1Component],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.scss',
})
export class Home1Component {}
