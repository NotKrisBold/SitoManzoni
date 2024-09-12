import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParallaxStandaloneDirective, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('textOverlay') textOverlays!: QueryList<ElementRef>;
  @ViewChildren('imageContainer') imageContainers!: QueryList<ElementRef>;

  imagesArray = [
    { src: '../../assets/images/casa1.jpg' },
    { src: '../../assets/images/casa2.jpg' },
    { src: '../../assets/images/casa3.jpg' }
  ];

  textsArray = [
    'Questo è il testo sopra la prima immagine',
    'Questo è il testo sopra la seconda immagine',
    'Questo è il testo sopra la terza immagine',
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.positionTextOverlays(), 0); // Assicura che il layout sia completato
  }

  private positionTextOverlays(): void {
    this.textOverlays.forEach((overlay, index) => {
      const container = this.imageContainers.toArray()[index]?.nativeElement;
      const overlayElement = overlay.nativeElement;
      
      if (container && overlayElement) {
        const containerHeight = container.clientHeight;
        const overlayHeight = overlayElement.clientHeight;
        
        // Calcola la posizione al 60% dell'altezza del contenitore
        const positionTop = (0.6 * containerHeight) - (overlayHeight / 2);
        
        // Aggiungi uno spostamento per evitare la sovrapposizione
        const offset = index * 70; // Adatta questo valore come necessario
        overlayElement.style.top = `${positionTop + offset}px`;
      }
    });
  }  
}
