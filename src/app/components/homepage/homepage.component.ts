import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeroSectionComponent, FeaturedSectionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
