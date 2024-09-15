import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcola l'altezza della navbar
      const navbarHeight = document.querySelector('.custom-navbar')?.clientHeight || 0;
      // Calcola la posizione di scroll
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      this.smoothScrollTo(offsetPosition, 2000); // Passa la durata in millisecondi

      // Forza l'aggiornamento della vista
      this.cdr.detectChanges();
    }
  }

  private smoothScrollTo(targetPosition: number, duration: number): void {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Funzione di easing

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
