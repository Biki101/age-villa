import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PropertiesSectionComponent } from './components/properties-section/properties-section.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'properties',
    component: PropertiesSectionComponent,
  },
];
