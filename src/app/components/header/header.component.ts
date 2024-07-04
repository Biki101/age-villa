import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faEnvelope = faEnvelope;
  faMap = faMap;

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['']);
  }
  goToProperties() {
    this.router.navigate(['/properties']);
  }
  goToDetails() {
    this.router.navigate(['/details']);
  }
  goToContact() {
    this.router.navigate(['/contact']);
  }
}
