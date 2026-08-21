import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class SmoothScroll {
  constructor() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    // Sync Lenis scroll with GSAP ScrollTrigger
    this.lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Bind GSAP ticker to Lenis RAF
    this.tickerCallback = (time) => {
      this.lenis.raf(time * 1000);
    };
    gsap.ticker.add(this.tickerCallback);
    gsap.ticker.lagSmoothing(0);
  }

  scrollTo(target, options = {}) {
    this.lenis.scrollTo(target, {
      offset: 0,
      duration: 1.5,
      ...options
    });
  }

  stop() {
    this.lenis.stop();
  }

  start() {
    this.lenis.start();
  }
}
