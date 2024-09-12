import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParallaxStandaloneDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    '../../assets/images/casa1.jpg',  
    '../../assets/images/casa2.jpg',
    '../../assets/images/casa3.jpg'
  ];

  texts = [
    'Benvenuti nella vostra casa vacanze!',
    'Affitto a lungo termine disponibile',
    'Contattaci per maggiori informazioni'
  ];

  
}