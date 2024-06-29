import { Component } from '@angular/core';
import { PropertiesCardComponent } from '../../reusable-components/properties-card/properties-card.component';

@Component({
  selector: 'app-properties-section',
  standalone: true,
  imports: [PropertiesCardComponent],
  templateUrl: './properties-section.component.html',
  styleUrl: './properties-section.component.scss',
})
export class PropertiesSectionComponent {}
