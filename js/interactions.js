// Interactive Elements — confirmation bar, tab switcher, stat counter

const Interactions = (() => {
  function init() {
    initConfirmationBar();
    initDemoTabs();
    initStatCounter();
  }

  // Confirmation Bar Demo (Slide 5)
  function initConfirmationBar() {
    const btn = document.getElementById('claim-demo-btn');
    const bar = document.getElementById('confirmation-bar-demo');
    const progress = bar?.querySelector('.progress');
    const statusText = document.getElementById('claim-status');

    if (!btn || !bar) return;

    btn.addEventListener('click', () => {
      // Reset
      bar.style.display = 'flex';
      bar.style.opacity = '1';
      if (progress) {
        progress.classList.remove('active');
        progress.offsetHeight; // reflow
        progress.classList.add('active');
      }
      if (statusText) statusText.textContent = 'Claiming food item...';
      btn.style.opacity = '0.5';
      btn.style.pointerEvents = 'none';

      // After 2.5s, show "Claimed!"
      setTimeout(() => {
        if (statusText) {
          statusText.textContent = 'Claimed! Directions ready.';
          statusText.style.color = '#34c759';
        }

        // Reset after another 2s
        setTimeout(() => {
          bar.style.opacity = '0';
          setTimeout(() => {
            bar.style.display = 'none';
            if (progress) progress.classList.remove('active');
            if (statusText) {
              statusText.textContent = '';
              statusText.style.color = '';
            }
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
          }, 300);
        }, 2000);
      }, 2500);
    });
  }

  // Demo Tab Switcher (Slide 6)
  function initDemoTabs() {
    const tabs = document.querySelectorAll('.demo-tab');
    const videos = document.querySelectorAll('.demo-video');

    if (!tabs.length || !videos.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.video;

        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Switch video
        videos.forEach(v => {
          if (v.dataset.feature === target) {
            v.style.display = 'block';
            v.currentTime = 0;
            v.play().catch(() => {});
          } else {
            v.style.display = 'none';
            v.pause();
          }
        });
      });
    });
  }

  // Animated Stat Counter (Slide 2)
  function initStatCounter() {
    const counter = document.getElementById('stat-counter');
    if (!counter) return;

    const slide = counter.closest('.slide');
    if (!slide) return;

    slide.addEventListener('slideenter', () => {
      let count = 0;
      const target = 61990;
      const duration = 1800;
      const steps = 60;
      const increment = Math.ceil(target / steps);
      const step = duration / steps;

      counter.textContent = '0';
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) { count = target; clearInterval(interval); }
        counter.textContent = count.toLocaleString();
      }, step);
    });
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', Interactions.init);
