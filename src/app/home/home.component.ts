import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import { NavbarComponent } from '../navbar/navbar.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParallaxStandaloneDirective, NavbarComponent, GalleryComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}
}
