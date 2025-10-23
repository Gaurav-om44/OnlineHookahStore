import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Smoke on Wheels';

  ngOnInit() {
    // Initialize smooth scrolling and other functionality
    this.initializeSmoothScrolling();
  }

  ngAfterViewInit() {
    // Initialize animations and other post-view functionality
    this.initializeAnimations();
  }

  private initializeSmoothScrolling() {
    // Add smooth scrolling to navigation links
    document.addEventListener('DOMContentLoaded', () => {
      const navLinks = document.querySelectorAll('a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    });
  }

  private initializeAnimations() {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .gallery img, .testimonials .card');
    animatedElements.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }
}
