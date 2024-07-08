import { Component } from '@angular/core';
import { BestDealsComponent } from '../best-deals/best-deals.component';

@Component({
  selector: 'app-property-details-page',
  standalone: true,
  imports: [BestDealsComponent],
  templateUrl: './property-details-page.component.html',
  styleUrl: './property-details-page.component.scss',
})
export class PropertyDetailsPageComponent {}
