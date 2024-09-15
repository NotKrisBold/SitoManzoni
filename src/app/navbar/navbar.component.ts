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
      // Get the height of the navbar only once
      const navbarHeight = document.querySelector('.custom-navbar')?.clientHeight || 0;
      // Calculate the scroll position
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      //Distanza da scrollare
      const distance = Math.abs(offsetPosition - window.pageYOffset);

      this.smoothScrollTo(offsetPosition, Math.sqrt(distance) * 50);
    }
  }

  private smoothScrollTo(targetPosition: number, duration: number): void {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

      // Only one DOM read and one DOM write per frame (minimize layout thrashing)
      const easedProgress = easeInOutQuad(progress);
      const scrollToPosition = startPosition + distance * easedProgress;

      window.scrollTo(0, scrollToPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        // Ensure change detection triggers after animation completes
        this.cdr.detectChanges();
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
