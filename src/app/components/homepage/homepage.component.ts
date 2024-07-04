import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { AchievementSectionComponent } from '../achievement-section/achievement-section.component';
import { BestDealsComponent } from '../best-deals/best-deals.component';
import { PropertiesSectionComponent } from '../properties-section/properties-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturedSectionComponent,
    AchievementSectionComponent,
    BestDealsComponent,
    PropertiesSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
