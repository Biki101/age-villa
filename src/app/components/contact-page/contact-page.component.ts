import { Component } from '@angular/core';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactSectionComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {}
