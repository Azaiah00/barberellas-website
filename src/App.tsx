import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Star,
  Calendar,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Services data
const services = [
  { name: 'Regular Short Haircut', price: '$60', description: 'Tailored to each client\'s needs with attention to growth patterns and hair texture.' },
  { name: 'Skin Fade', price: '$65', description: 'Advanced technique starting at "zero" guard for a refreshing edgy look.' },
  { name: 'Precision Long Haircut', price: '$110', description: 'Art of precision cutting for flowing hair. Bob styles included.' },
  { name: 'Buzzcut', price: '$35', description: 'Clippers on top with back and sides including a line up.' },
  { name: 'Buzzcut with Skin Fade', price: '$45', description: 'Clippers on top with skin fade on the sides.' },
  { name: 'Beard Sculpting', price: '$35', description: 'Creating a new shape by expertly sculpting your beard.' },
  { name: 'Beard Trim', price: '$30', description: 'Maintaining your current style and re-establishing lines.' },
  { name: 'Bang Trim', price: '$25', description: 'Getting the right length and style you desire.' },
  { name: 'Straight Razor Shave', price: '$70', description: 'Classic and luxurious hot towel shave experience.' },
  { name: 'Straight Razor Head Shave', price: '$65', description: 'Slick look with the smoothest feel.' },
];

// Team data
const team = [
  { name: 'Amanda', role: 'Owner / Stylist', image: '/staff/amanda.png', bio: 'Seattle local with a passion for the craft since 2011. Loves camping, hiking, riding motorcycles, music, art, video games and of course, her pit bulls.' },
  { name: 'Nickolaus', role: 'Barber', image: '/staff/nickolaus.png', bio: 'Veteran turned barber since 2019. Medievalist by hobby, loves sword fighting and trivia nights.' },
  { name: 'Heather', role: 'Stylist', image: '/staff/heather.png', bio: '14 years of making people look fabulous. Loves color, skin fades, sports, and adventures.' },
  { name: 'Kellie', role: 'Stylist', image: '/staff/kellie.png', bio: 'Washington native specializing in barbering and anything funky. Obsessed with horse racing and rock climbing.' },
  { name: 'Emy', role: 'Stylist', image: '/staff/emy.png', bio: '15 years in the trade. White Center resident who loves creating both masculine and feminine styles. Taming crazy cowlicks is her specialty.' },
  { name: 'Stephanie', role: 'Stylist', image: '/staff/stephanie.png', bio: 'Passionate about hair since 2006. Enjoys styling men and women from fades to bobs.' },
];

// Reviews data
const reviews = [
  {
    name: "James E.",
    date: "Feb 13, 2026",
    text: "Amanda is a Zen Master of men’s haircuts. When you sit in her chair, know that you are in the best hands possible for a haircut that will look great when you leave and stay looking great until your next appointment.",
    target: "Amanda Mayer"
  },
  {
    name: "Gerald M.",
    date: "Feb 01, 2026",
    text: "Steph has been an excellent stylist for my hair cuts. Always pleasant, and courteous during my appointments, she always insured I was a happy customer. I highly recommend her!",
    target: "Stephanie Marie"
  },
  {
    name: "Elisabeth F.",
    date: "Jan 11, 2026",
    text: "Kellie’s a really cool person and does great at her job. 10/10 recommend booking with Kellie! She also had a great eye/sense for what would suit me without me even having to explain.",
    target: "Kellie Gregerson"
  },
  {
    name: "Scott B.",
    date: "Nov 15, 2025",
    text: "Best barbershop in Seattle, Amanda, Nickolaus, and Stephanie rock!! Nick is consistently excellent, both with his styling and skills.",
    target: "Nickolaus Forthun"
  },
  {
    name: "Matt B.",
    date: "Sep 19, 2025",
    text: "Heather is the best! She’s been cutting my hair for years. I just tell her to make me look good and she knows what to do. Thanks Heather!",
    target: "Heather Peterman"
  },
  {
    name: "oLivEr k.",
    date: "Sep 08, 2025",
    text: "Easy peezy with Emy. Casual pro. Always gives a great haircut and is a good hang.",
    target: "Emy Belknap"
  },
  {
    name: "Dennis M.",
    date: "Oct 15, 2025",
    text: "Dougie is the best employee :) Super friendly and knows exactly what you need and want. Plus she has a rad setup!",
    target: "Venue"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const visitRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const reviewsCarouselRef = useRef<HTMLDivElement>(null);
  const teamCarouselRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open so the page doesn't scroll to a black section
  useEffect(() => {
    // Removed body scroll lock to see if it fixes the black screen issue
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Hero load animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero load animation
      const heroTl = gsap.timeline();
      
      heroTl
        .fromTo('.hero-photo', 
          { opacity: 0, scale: 1.08, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' }
        )
        .fromTo('.hero-title',
          { opacity: 0, x: '-12vw' },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo('.hero-rule',
          { scaleY: 0 },
          { scaleY: 1, duration: 0.8, ease: 'power2.out', transformOrigin: 'top' },
          '-=0.5'
        )
        .fromTo('.hero-cta',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo('.hero-micro',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // scrub: 0.3 desktop = quick catch-up, smooth feel
      // scrub: 0.3 touch = near-instant, follows finger naturally
      const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
      const scrubVal = isTouch ? 0.3 : 0.3;
      const scrubValLoose = isTouch ? 0.3 : 0.3;

      // Hero scroll exit animation
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: scrubVal,
          onLeaveBack: () => {
            gsap.set('.hero-title, .hero-photo, .hero-rule, .hero-cta, .hero-micro', { 
              opacity: 1, x: 0, y: 0, scale: 1, scaleY: 1 
            });
          }
        }
      });

      heroScrollTl
        .fromTo('.hero-title', 
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-photo',
          { x: 0, scale: 1, opacity: 1 },
          { x: '-10vw', scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-rule',
          { scaleY: 1, opacity: 1 },
          { scaleY: 0.2, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-cta',
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.hero-micro',
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Services section
      const servicesScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: scrubVal,
        }
      });

      servicesScrollTl
        .fromTo('.services-title',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.services-rule',
          { scaleX: 0 },
          { scaleX: 1, ease: 'power2.out', transformOrigin: 'left' },
          0.05
        )
        .fromTo('.services-photo',
          { x: '60vw', opacity: 0, scale: 1.06 },
          { x: 0, opacity: 1, scale: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.services-panel',
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('.services-title',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.services-photo',
          { x: 0, scale: 1, opacity: 1 },
          { x: '18vw', scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.services-panel',
          { y: 0, opacity: 1 },
          { y: '18vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.services-rule',
          { scaleX: 1, opacity: 1 },
          { scaleX: 0.2, opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Team section
      const teamScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: scrubVal,
        }
      });

      teamScrollTl
        .fromTo('.team-title',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.team-photo',
          { y: '60vh', opacity: 0, scale: 1.05 },
          { y: 0, opacity: 1, scale: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.team-panel',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('.team-bracket',
          { scaleX: 0, scaleY: 0 },
          { scaleX: 1, scaleY: 1, ease: 'power2.out' },
          0.15
        )
        .fromTo('.team-title',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.team-photo',
          { y: 0, scale: 1, opacity: 1 },
          { y: '-16vh', scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.team-panel',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.team-bracket',
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Infinite autoscroll for team (talent) carousel — no scrollbar
      const teamCarousel = teamCarouselRef.current;
      if (teamCarousel) {
        const setupTeamAutoscroll = () => {
          const scrollWidth = teamCarousel.scrollWidth;
          const clientWidth = teamCarousel.clientWidth;
          if (scrollWidth > clientWidth) {
            gsap.to(teamCarousel, {
              scrollLeft: scrollWidth - clientWidth,
              duration: 45,
              ease: 'none',
              repeat: -1,
              yoyo: true,
            });
          }
        };
        setTimeout(setupTeamAutoscroll, 100);
      }

      // Reviews section
      const reviewsScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: scrubVal,
        }
      });

      reviewsScrollTl
        .fromTo('.reviews-title',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.reviews-diagonal',
          { scaleX: 0 },
          { scaleX: 1, ease: 'power2.out', transformOrigin: 'left' },
          0.05
        )
        .fromTo('.reviews-carousel',
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('.reviews-title',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.reviews-diagonal',
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.reviews-carousel',
          { y: 0, opacity: 1 },
          { y: '18vh', opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Autoscroll for reviews carousel
      const carousel = reviewsCarouselRef.current;
      if (carousel) {
        const setupAutoscroll = () => {
          const scrollWidth = carousel.scrollWidth;
          const clientWidth = carousel.clientWidth;
          
          if (scrollWidth > clientWidth) {
            gsap.to(carousel, {
              scrollLeft: scrollWidth - clientWidth,
              duration: 40,
              ease: "none",
              repeat: -1,
              yoyo: true
            });
          }
        };

        // Small delay to ensure content is measured correctly
        setTimeout(setupAutoscroll, 100);
      }

      // Booking section
      const bookingScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: bookingRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: scrubVal,
        }
      });

      bookingScrollTl
        .fromTo('.booking-title',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.booking-diagonal',
          { scaleX: 0 },
          { scaleX: 1, ease: 'power2.out', transformOrigin: 'left' },
          0.05
        )
        .fromTo('.booking-photo',
          { x: '60vw', opacity: 0, scale: 1.06 },
          { x: 0, opacity: 1, scale: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.booking-panel',
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('.booking-title',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.booking-photo',
          { x: 0, scale: 1, opacity: 1 },
          { x: '18vw', scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.booking-panel',
          { y: 0, opacity: 1 },
          { y: '18vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.booking-diagonal',
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Visit section
      const visitScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: visitRef.current,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: scrubVal,
        }
      });

      visitScrollTl
        .fromTo('.visit-title',
          { x: '-50vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.visit-rule',
          { scaleY: 0 },
          { scaleY: 1, ease: 'power2.out', transformOrigin: 'top' },
          0.05
        )
        .fromTo('.visit-photo',
          { y: '60vh', opacity: 0, scale: 1.05 },
          { y: 0, opacity: 1, scale: 1, ease: 'power3.out' },
          0
        )
        .fromTo('.visit-panel',
          { x: '40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0.1
        )
        .fromTo('.visit-title',
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.visit-photo',
          { y: 0, scale: 1, opacity: 1 },
          { y: '-16vh', scale: 0.96, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.visit-panel',
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo('.visit-rule',
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );

      // Contact section (flowing, not pinned)
      gsap.fromTo('.contact-title',
        { x: '-10vw', opacity: 0 },
        {
          x: 0, opacity: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: scrubValLoose
          }
        }
      );

      gsap.fromTo('.contact-rule',
        { scaleX: 0 },
        {
          scaleX: 1, ease: 'power2.out', transformOrigin: 'left',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: scrubValLoose
          }
        }
      );

      gsap.fromTo('.contact-form',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 70%',
            end: 'top 40%',
            scrub: scrubValLoose
          }
        }
      );

      gsap.fromTo('.contact-details',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 65%',
            end: 'top 35%',
            scrub: scrubValLoose
          }
        }
      );

      gsap.fromTo('.contact-photo',
        { y: 80, opacity: 0, scale: 1.04 },
        {
          y: 0, opacity: 1, scale: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: scrubValLoose
          }
        }
      );

      // Closing section (flowing, not pinned)
      gsap.fromTo('.closing-title',
        { x: '-20vw', opacity: 0 },
        {
          x: 0, opacity: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: closingRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: scrubValLoose
          }
        }
      );

      gsap.fromTo('.closing-photo',
        { x: '10vw', opacity: 0, scale: 1.04 },
        {
          x: 0, opacity: 1, scale: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: closingRef.current,
            start: 'top 75%',
            end: 'top 45%',
            scrub: scrubValLoose
          }
        }
      );

      gsap.fromTo('.closing-social',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: closingRef.current,
            start: 'top 60%',
            end: 'top 30%',
            scrub: scrubValLoose
          }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  // Scroll snap removed — it was snapping to section centers and requiring aggressive
  // scrolling to advance. Natural scroll through pinned sections is better UX.

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, offsetVh: number = 0) => {
    setMobileMenuOpen(false);
    // Logo / home: always go to the very top so hero is fully in view
    if (ref === heroRef) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (!ref.current) return;
    const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop + (window.innerHeight * offsetVh),
      behavior: 'smooth'
    });
  };

  return (
    <div ref={mainRef} className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Vignette */}
      <div className="vignette" />

      {/* Navigation - z-[10000] so it sits above grain overlay (z-9999) and hamburger is tappable on mobile */}
      <nav className="fixed top-0 left-0 right-0 z-[10000] px-6 py-4 flex justify-between items-center bg-gradient-to-b from-barber-black/80 to-transparent">
        <button
          type="button"
          onClick={() => scrollToSection(heroRef, 0)}
          aria-label="Back to top"
          className="flex items-center gap-3 bg-transparent border-0 p-0 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <div className="neon-logo text-4xl sm:text-5xl transform -rotate-2 relative px-2 py-1">
            Barberella's
          </div>
        </button>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection(servicesRef, 0.45)} className="scene-label hover:text-barber-gold transition-colors">Services</button>
          <button onClick={() => scrollToSection(teamRef, 0.25)} className="scene-label hover:text-barber-gold transition-colors">Team</button>
          <button onClick={() => scrollToSection(reviewsRef, 0.25)} className="scene-label hover:text-barber-gold transition-colors">Vibes</button>
          <button onClick={() => scrollToSection(bookingRef, 0.25)} className="scene-label hover:text-barber-gold transition-colors">Book</button>
          <button onClick={() => scrollToSection(contactRef, 0.25)} className="scene-label hover:text-barber-gold transition-colors">Contact</button>
        </div>

        {/* Mobile Menu Button - min 44px touch target, stopPropagation so tap isn't lost to scroll */}
        <button 
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-barber-cream p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMobileMenuOpen((open) => !open);
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown - INSIDE NAV for guaranteed stacking */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#0B0B0D',
              borderTop: '1px solid rgba(244, 241, 234, 0.1)',
              borderBottom: '1px solid rgba(244, 241, 234, 0.1)',
              padding: '1rem 0',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
              zIndex: 100001
            }}
          >
            {[
              { label: 'SERVICES', ref: servicesRef, offset: 0.45 },
              { label: 'TEAM', ref: teamRef, offset: 0.25 },
              { label: 'VIBES', ref: reviewsRef, offset: 0.25 },
              { label: 'BOOK', ref: bookingRef, offset: 0.25 },
              { label: 'CONTACT', ref: contactRef, offset: 0.25 },
            ].map(({ label, ref, offset }) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(ref, offset)}
                style={{
                  color: '#F4F1EA',
                  fontSize: '1.25rem',
                  fontFamily: "'Anton', sans-serif",
                  background: 'none',
                  border: 'none',
                  padding: '1.25rem 2rem',
                  textAlign: 'left',
                  width: '100%',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="pinned-section bg-barber-black z-10">
        {/* Vertical Rule */}
        <div className="hero-rule absolute left-[10vw] top-[18vh] w-px h-[62vh] bg-barber-cream/40 origin-top" />
        
        {/* Title */}
        <h1 className="hero-title scene-title absolute left-[6vw] top-[8vh] z-30">
          BARBERELLA'S
        </h1>

        {/* Photo Card */}
        <div className="hero-photo photo-card absolute left-[18vw] top-[18vh] w-[64vw] h-[56vh] z-20">
          <img 
            src="/hero-cut.jpg" 
            alt="Barberella's Barber Shop" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* CTA Panel */}
        <div className="hero-cta absolute right-[6vw] bottom-[10vh] w-[28vw] min-w-[280px] z-40">
          <p className="scene-subtitle mb-6">
            Classic cuts, modern confidence. Holding down White Center one cut at a time.
          </p>
          <button 
            onClick={() => scrollToSection(bookingRef, 0.25)}
            className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            Book a Cut
          </button>
          <button 
            onClick={() => scrollToSection(servicesRef, 0.45)}
            className="text-link text-sm w-full text-center"
          >
            View Services
          </button>
        </div>

        {/* Micro Label */}
        <div className="hero-micro scene-label absolute left-[6vw] bottom-[8vh] z-30">
          Seattle • Walk-ins welcome
        </div>
      </section>

      {/* Section 2: Services */}
      <section ref={servicesRef} className="pinned-section bg-barber-crimson z-20">
        {/* Title */}
        <h2 className="services-title scene-title absolute left-[6vw] top-[10vh] z-30">
          THE MENU
        </h2>

        {/* Horizontal Rule */}
        <div className="services-rule absolute left-[6vw] top-[26vh] w-[56vw] h-px bg-barber-cream/40 origin-left" />

        {/* Photo Card */}
        <div className="services-photo photo-card absolute right-[6vw] top-[18vh] w-[56vw] h-[54vh] z-20">
          <img 
            src="/services-hairwash.jpg" 
            alt="Hair wash service" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Services Panel */}
        <div className="services-panel absolute left-[6vw] bottom-[12vh] w-[34vw] min-w-[300px] z-40">
          <div className="bg-barber-black/40 backdrop-blur-md p-6 rounded-2xl border border-barber-cream/10">
            <div className="scene-label mb-4 text-barber-gold opacity-80">Quality service at a reasonable cost</div>
            <div className="space-y-1 max-h-[24vh] md:max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin">
              {services.map((service, index) => (
                <div key={index} className="service-item group py-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="service-name group-hover:text-barber-gold transition-colors">{service.name}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <p className="text-barber-gray text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a 
                href="https://www.vagaro.com/barberellasbarbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
              >
                <Calendar size={14} />
                Book Now
              </a>
              <button 
                onClick={() => scrollToSection(contactRef, 0.25)}
                className="text-link text-sm"
              >
                Full Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Team */}
      <section ref={teamRef} className="pinned-section bg-barber-black z-30">
        {/* Title */}
        <h2 className="team-title scene-title absolute left-[6vw] top-[10vh] z-30">
          THE TALENT
        </h2>

        {/* Photo Card (Background) */}
        <div className="team-photo absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-barber-black/60 z-10" />
          <img 
            src="/team-interior.jpg" 
            alt="Barberella's Team" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corner Brackets */}
        <div className="team-bracket absolute right-[8vw] top-[18vh] z-20">
          <div className="w-8 h-8 border-t-2 border-r-2 border-barber-gold/40" />
          <div className="w-8 h-8 border-b-2 border-l-2 border-barber-gold/40 mt-4 ml-4" />
        </div>

        {/* Team Panel (Carousel) */}
        <div className="team-panel absolute inset-x-0 bottom-[10vh] z-40 px-[6vw]">
          <div ref={teamCarouselRef} className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
            {team.map((member, index) => (
              <div key={index} className="flex-none w-[260px] md:w-[280px] bg-barber-black/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-barber-cream/10 snap-start hover:border-barber-gold/30 transition-colors group">
                <div className="h-[160px] md:aspect-square mb-4 md:mb-6 rounded-xl overflow-hidden border border-barber-cream/10 group-hover:border-barber-gold/20 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="team-name text-xl mb-1">{member.name}</div>
                <div className="team-role text-barber-gold mb-3">{member.role}</div>
                {/* Bio: always visible on mobile, clamp only on desktop */}
                <p className="text-barber-gray text-sm leading-relaxed md:line-clamp-4 md:group-hover:line-clamp-none">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-px flex-1 bg-barber-cream/10" />
            <span className="scene-label text-[10px] opacity-50">Scroll to explore the team</span>
            <div className="h-px flex-1 bg-barber-cream/10" />
          </div>
        </div>
      </section>

      {/* Section 3.5: Reviews */}
      <section ref={reviewsRef} className="pinned-section bg-barber-crimson z-[35]">
        {/* Title */}
        <h2 className="reviews-title scene-title absolute left-[6vw] top-[10vh] z-30">
          VIBES
        </h2>

        {/* Diagonal Rule */}
        <div 
          className="reviews-diagonal absolute left-[12vw] top-[22vh] w-[40vw] h-px bg-barber-cream/40 origin-left"
          style={{ transform: 'rotate(12deg)' }}
        />

        {/* Carousel */}
        <div className="reviews-carousel absolute inset-x-0 bottom-[15vh] z-40 px-[6vw] hidden-rotate-mobile" style={{ transform: 'rotate(-2deg)' }}>
          <div ref={reviewsCarouselRef} className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
            {reviews.map((review, index) => (
              <div key={index} className="flex-none w-[280px] md:w-[320px] bg-barber-black/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-barber-cream/10 hover:border-barber-gold/30 transition-colors group" style={{ transform: 'rotate(2deg)' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-barber-gold text-barber-gold" />
                  ))}
                </div>
                <p className="text-barber-cream font-inter text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-barber-cream font-medium text-sm">{review.name}</div>
                    <div className="text-barber-gray text-[10px] uppercase tracking-widest">{review.date}</div>
                  </div>
                  <div className="text-barber-gold text-[10px] font-mono uppercase tracking-wider opacity-60">
                    re: {review.target}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Booking */}
      <section ref={bookingRef} className="pinned-section bg-barber-crimson z-40">
        {/* Title */}
        <h2 className="booking-title scene-title absolute left-[6vw] top-[10vh] z-30">
          BOOK NOW
        </h2>

        {/* Diagonal Rule */}
        <div 
          className="booking-diagonal absolute left-[12vw] top-[22vh] w-[40vw] h-px bg-barber-cream/40 origin-left"
          style={{ transform: 'rotate(12deg)' }}
        />

        {/* Photo Card */}
        <div className="booking-photo photo-card absolute right-[6vw] top-[20vh] w-[58vw] h-[54vh] z-20">
          <img 
            src="/booking-neon.jpg" 
            alt="Barberella's Neon Sign" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Booking Panel */}
        <div className="booking-panel absolute left-[6vw] bottom-[12vh] w-[32vw] min-w-[280px] z-40">
          <p className="scene-subtitle mb-6 text-lg">
            Pick a time. Pick a pro. Show up looking better.
          </p>
          <a 
            href="https://www.vagaro.com/barberellasbarbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            Reserve on Vagaro
          </a>
          <a 
            href="tel:206-659-0027"
            className="btn-secondary w-full flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Call (206) 659-0027
          </a>
        </div>
      </section>

      {/* Section 5: Visit */}
      <section ref={visitRef} className="pinned-section bg-barber-black z-50">
        {/* Title */}
        <h2 className="visit-title scene-title absolute left-[6vw] top-[10vh] z-30">
          VISIT
        </h2>

        {/* Vertical Rule */}
        <div className="visit-rule absolute left-[10vw] top-[18vh] w-px h-[62vh] bg-barber-cream/40 origin-top" />

        {/* Photo Card */}
        <div className="visit-photo photo-card absolute left-[18vw] top-[22vh] w-[62vw] h-[52vh] z-20">
          <img 
            src="/location-exterior.jpg" 
            alt="Barberella's Location" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Panel */}
        <div className="visit-panel absolute right-[6vw] bottom-[12vh] w-[26vw] min-w-[240px] z-40">
          <div className="space-y-4">
            <div>
              <div className="scene-label mb-2">ADDRESS</div>
              <p className="text-barber-cream font-inter">
                9823 16th Ave SW<br />
                Seattle, WA 98106
              </p>
            </div>
            <div>
              <div className="scene-label mb-2">HOURS</div>
              <p className="text-barber-cream font-inter">
                Mon–Sat: 9am–9pm
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=9823+16th+Ave+SW+Seattle+WA+98106"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section ref={contactRef} className="relative bg-barber-black z-[60] py-20 min-h-screen">
        {/* Title */}
        <h2 className="contact-title scene-title px-[6vw] pt-[8vh]">
          SAY HELLO
        </h2>

        {/* Rule */}
        <div className="contact-rule ml-[6vw] mt-4 w-[20vw] h-px bg-barber-cream/40 origin-left" />

        {/* Content Grid */}
        <div className="px-[6vw] mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Column */}
          <div className="contact-form">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="form-label">Name</label>
                <input type="text" className="form-input" placeholder="Your name" />
              </div>
              <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div>
                <label className="form-label">Phone</label>
                <input type="tel" className="form-input" placeholder="(206) 555-0000" />
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea className="form-input h-32 resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Mail size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Details Column */}
          <div className="contact-details space-y-8">
            {/* Small Photo */}
            <div className="contact-photo photo-card w-full max-w-[300px] h-[200px] hidden lg:block">
              <img 
                src="/contact-detail.jpg" 
                alt="Barber tools" 
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="scene-label mb-3">CONTACT</div>
              <div className="space-y-2">
                <a href="tel:206-659-0027" className="flex items-center gap-3 text-barber-cream hover:text-barber-gold transition-colors">
                  <Phone size={16} className="text-barber-gold" />
                  (206) 659-0027
                </a>
                <a href="mailto:Amanda@barberellasseattle.com" className="flex items-center gap-3 text-barber-cream hover:text-barber-gold transition-colors">
                  <Mail size={16} className="text-barber-gold" />
                  Amanda@barberellasseattle.com
                </a>
              </div>
            </div>

            <div>
              <div className="scene-label mb-3">GIFT CARDS</div>
              <p className="text-barber-gray text-sm leading-relaxed">
                Give the gift of confidence. Gift cards are available for all services. Ask in the shop or call us to purchase.
              </p>
            </div>

            <div>
              <div className="scene-label mb-3">CANCELLATION POLICY</div>
              <p className="text-barber-gray text-sm leading-relaxed">
                We require 12 hours advance notice for cancellations. Late cancellations (less than 2 hours) 
                and no-shows may incur a fee. After a second no-show, a card on file will be charged. 
                We understand life happens—please give us a call at (206) 659-0027 when possible.
              </p>
            </div>

            <div>
              <div className="scene-label mb-3">HAIR COLOR</div>
              <p className="text-barber-gray text-sm">
                For hair color services, please call the shop at (206) 659-0027 for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Closing */}
      <section ref={closingRef} className="relative bg-barber-crimson z-[70] py-20 min-h-screen">
        {/* Title - Layered on top */}
        <h2 className="closing-title scene-title absolute left-[6vw] top-[10vh] z-30 pointer-events-none">
          SEE YOU SOON
        </h2>

        {/* Photo Card */}
        <div className="closing-photo photo-card absolute right-[6vw] top-[18vh] w-[56vw] h-[52vh] z-20">
          <img 
            src="/closing-chair.jpg" 
            alt="Classic Barber Chair" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social + Footer */}
        <div className="closing-social absolute left-[6vw] bottom-[10vh] z-30">
          <p className="scene-subtitle mb-6">
            Walk-ins welcome. Appointments recommended.
          </p>
          <div className="scene-label mb-4">FOLLOW THE SHOP</div>
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-barber-cream/10 flex items-center justify-center hover:bg-barber-gold hover:text-barber-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-barber-cream/10 flex items-center justify-center hover:bg-barber-gold hover:text-barber-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-barber-cream/10 flex items-center justify-center hover:bg-barber-gold hover:text-barber-black transition-all">
              <Star size={18} />
            </a>
          </div>
          <p className="scene-label text-barber-gray">
            © 2018 - Forever - Barberella's Seattle
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
