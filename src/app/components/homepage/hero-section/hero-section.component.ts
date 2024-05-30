import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  currentIndex = 0;

  constructor() {
    setInterval(() => {
      this.changeImage();
    }, 5000);
  }

  changeImage() {
    this.currentIndex = Math.floor(Math.random() * 3);
    console.log(this.currentIndex);
  }
}
