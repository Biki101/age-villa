import { Component } from '@angular/core';
import { herSectionAssets } from '../../../utils';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  images = herSectionAssets;
}
