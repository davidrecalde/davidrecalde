import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initScrollAnimations() {
  if (prefersReducedMotion) return;

  // BEAT 1 — DESIGN (Hero)
  // Elements compose into place with stagger, like a layout being designed.
  const heroSection = document.querySelector('.hero-name')?.closest('section');
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });

  heroTl
    .from('.hero-name', { opacity: 0, y: 24, duration: 0.6 })
    .from('.hero-role', { opacity: 0, y: 16 }, '-=0.35')
    .from('.hero-tagline', { opacity: 0, y: 16 }, '-=0.4')
    .from(heroSection?.querySelector('.btn-primary') || [], { opacity: 0, y: 12 }, '-=0.35')
    .from('.hero-photo img', { opacity: 0, scale: 1.04, duration: 0.8 }, '-=0.6');

  // BEAT 2 — BUILD (Elevator pitch)
  // Lines stack sequentially — structural, assembling.
  gsap.from('.pitch-intro', {
    scrollTrigger: {
      trigger: '.pitch-block',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out',
  });

  gsap.from('.pitch-line', {
    scrollTrigger: {
      trigger: '.pitch-block',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 18,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.15,
  });

  gsap.from('.pitch-summary, .roles-line', {
    scrollTrigger: {
      trigger: '.pitch-summary',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 14,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1,
  });

  // BEAT 3 — GROW (Logos + Service cards)
  // Subtle scale-up — expansion/reach.
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

  // CTA — simple, confident entrance
  gsap.from('.cta-block > *', {
    scrollTrigger: {
      trigger: '.cta-block',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 18,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1,
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
