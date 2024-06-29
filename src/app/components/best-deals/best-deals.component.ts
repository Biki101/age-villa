import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss',
})
export class BestDealsComponent {
  activeTab = 0;
  details = [
    {
      space: 185,
      floor: '26th',
      rooms: 4,
      parking: 'yes',
      payment: 'Bank',
      image: '../../../assets/best-deal1.jpg',
    },
    {
      space: 250,
      floor: '24th',
      rooms: 5,
      parking: 'yes',
      payment: 'Bank',
      image: '../../../assets/best-deal4.jpg',
    },
    {
      space: 320,
      floor: '34th',
      rooms: 6,
      parking: 'yes',
      payment: 'Bank',
      image: '../../../assets/best-deal3.jpg',
    },
  ];
}
