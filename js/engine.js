// Slide Engine — keyboard nav, hash routing, fullscreen

const Engine = (() => {
  let current = 0;
  let total = 0;
  let slides = [];
  let transitioning = false;

  function init() {
    slides = Array.from(document.querySelectorAll('.slide'));
    total = slides.length;

    // Check hash for starting slide
    const hash = window.location.hash.match(/slide-(\d+)/);
    if (hash) {
      current = Math.min(parseInt(hash[1]), total - 1);
    }

    // Show first slide
    slides[current].classList.add('active');
    updateIndicators();
    updateWatermark();

    // Keyboard
    document.addEventListener('keydown', handleKey);

    // Hash changes
    window.addEventListener('hashchange', () => {
      const m = window.location.hash.match(/slide-(\d+)/);
      if (m) goTo(parseInt(m[1]));
    });

    // Click navigation zones (right 30% = next, left 30% = prev)
    document.addEventListener('click', (e) => {
      // Don't navigate if clicking interactive elements
      if (e.target.closest('button, .demo-tab, .glass-button, .glass-chip, video, a')) return;
      const x = e.clientX / window.innerWidth;
      if (x > 0.7) next();
      else if (x < 0.3) prev();
    });
  }

  function handleKey(e) {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'd':
      case 'D':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'a':
      case 'A':
        e.preventDefault();
        prev();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
        break;
    }
  }

  function next() {
    if (current < total - 1) goTo(current + 1);
  }

  function prev() {
    if (current > 0) goTo(current - 1);
  }

  function goTo(index) {
    if (index === current || index < 0 || index >= total || transitioning) return;
    transitioning = true;

    const oldSlide = slides[current];
    const newSlide = slides[index];

    // Dispatch leave event
    oldSlide.dispatchEvent(new CustomEvent('slideleave'));

    // Transition
    oldSlide.classList.remove('active');

    // Reset animated elements before making slide active
    const selectors = '.stagger-in > *, .a11y-badge, .impact-circle, .cbl-arrow';
    newSlide.querySelectorAll(selectors).forEach(el => {
      el.getAnimations().forEach(a => a.cancel());
    });
    void newSlide.offsetHeight;

    newSlide.classList.add('active');

    // Dispatch enter event
    newSlide.dispatchEvent(new CustomEvent('slideenter'));

    current = index;
    window.location.hash = `slide-${current}`;
    updateIndicators();
    updateWatermark();

    setTimeout(() => { transitioning = false; }, 450);
  }

  // resetAnimations removed — logic now inline in goTo()

  function updateIndicators() {
    const indicator = document.getElementById('slide-indicator');
    if (indicator) {
      // Don't show indicator on splash (slide 0)
      if (current === 0) {
        indicator.style.opacity = '0';
      } else {
        indicator.style.opacity = '1';
        indicator.textContent = `${current} / ${total - 1}`;
      }
    }

    const progress = document.getElementById('progress-bar');
    if (progress) {
      if (current === 0) {
        progress.style.width = '0%';
      } else {
        progress.style.width = `${(current / (total - 1)) * 100}%`;
      }
    }

  }

  function updateWatermark() {
    const wm = document.getElementById('bcu-watermark');
    if (wm) {
      // Hide on splash (0) and slide 4 (Mary McLeod Bethune)
      const slideEl = slides[current];
      const hide = current === 0 || (slideEl && slideEl.id === 'slide-4');
      wm.style.opacity = hide ? '0' : '0.25';
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }

  return { init, next, prev, goTo, getCurrent: () => current };
})();

document.addEventListener('DOMContentLoaded', Engine.init);
