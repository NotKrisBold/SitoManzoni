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

      //this.disableScroll();
      this.smoothScrollTo(offsetPosition, 2000); // Passa la durata in millisecondi
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
      else{
        //Force view update
        this.cdr.detectChanges();
        //this.enableScroll();
      }
    };

    requestAnimationFrame(animateScroll);
  }

  private preventDefault(event: Event): void {
    event.preventDefault();
  }


  private disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}


  private enableScroll() {
    window.onscroll = function () { };
  }


  private preventDefaultForKey(event: KeyboardEvent): void {
    const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'];
    if (keys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
