import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initHomeAnimations() {
  if (prefersReducedMotion) return;

  // Moment 1 — identity entrance on load
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });
  tl.from('.identity-title',    { opacity: 0, y: 20, duration: 0.8 })
    .from('.identity-footer',   { opacity: 0, y: 10, duration: 0.5 }, '-=0.3');

  // Moment 2 — field statement on scroll
  gsap.from('.field-statement', {
    scrollTrigger: { trigger: '.moment-field', start: 'top 80%', toggleActions: 'play none none none' },
    opacity: 0, y: 24, duration: 0.7, ease: 'power2.out',
  });
  gsap.from('.field-link', {
    scrollTrigger: { trigger: '.field-link', start: 'top 85%', toggleActions: 'play none none none' },
    opacity: 0, y: 10, duration: 0.5, ease: 'power2.out', delay: 0.2,
  });

  // Moment 4 — editorial nav links
  gsap.from('.editorial-nav-link', {
    scrollTrigger: { trigger: '.editorial-nav', start: 'top 85%', toggleActions: 'play none none none' },
    opacity: 0, y: 12, duration: 0.5, ease: 'power2.out', stagger: 0.1,
  });
}

export function initCasesAnimation() {
  if (prefersReducedMotion) return;

  gsap.from('.cases-item', {
    scrollTrigger: {
      trigger: '.cases-list',
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
