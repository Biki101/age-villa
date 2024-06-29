import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-properties-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties-card.component.html',
  styleUrl: './properties-card.component.scss',
})
export class PropertiesCardComponent {
  @Input() type = 'Luxury Villa';
  @Input() price: number = 200050.0;
  @Input() address = '';
  @Input() bedrooms = 0;
  @Input() bathrooms = 0;
  @Input() area = 0;
  @Input() floor = 0;
  @Input() parking = 0;
  @Input() image = '../../../assets/hero2.jpg';
}
