import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollAnimations() {
  if (prefersReducedMotion) return;

  // Hero — tagline fades in on load
  gsap.from('.hero-tagline-xl', { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' });

  // Name + role section — fade in on load with slight delay
  const introTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.6 }, delay: 0.3 });
  introTl
    .from('.hero-name-section', { opacity: 0, y: 14 })
    .from('.hero-role-section', { opacity: 0, y: 10 }, '-=0.35')
    .from('.hero-name-section ~ .btn-primary', { opacity: 0, y: 10 }, '-=0.3');

  // Service cards — scale+fade on scroll
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 28,
    scale: 0.97,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.15,
  });

  // Logos — subtle scale-up
  gsap.from('.logo-row img', {
    scrollTrigger: {
      trigger: '.logo-row',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    scale: 0.92,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.08,
  });
}

export function initWorkTableAnimation() {
  if (prefersReducedMotion) return;

  gsap.from('.work-table tbody tr', {
    scrollTrigger: {
      trigger: '.work-table',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 16,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.08,
  });
}

export function initHoverPolish() {
  if (prefersReducedMotion) return;

  document.querySelectorAll<HTMLElement>('.btn-primary').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });
}
