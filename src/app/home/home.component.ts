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
export class HomeComponent{
  
}