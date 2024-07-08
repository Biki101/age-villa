import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PropertiesSectionComponent } from './components/properties-section/properties-section.component';
import { PropertyDetailsPageComponent } from './components/property-details-page/property-details-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'properties',
    component: PropertiesSectionComponent,
  },
  {
    path: 'properties-details',
    component: PropertyDetailsPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
];
