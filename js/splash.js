// Splash Screen Animation — port from SplashScreenView.swift

const Splash = (() => {
  function init() {
    const splash = document.getElementById('slide-splash');
    if (!splash) return;

    // Start animation sequence after a tiny delay
    setTimeout(() => {
      const logo = splash.querySelector('.splash-logo');
      const title = splash.querySelector('.splash-title');
      const tagline = splash.querySelector('.splash-tagline');

      if (logo) logo.classList.add('animate');
      if (title) title.classList.add('animate');
      if (tagline) tagline.classList.add('animate');

      // Fade out and auto-advance at 2.5s
      setTimeout(() => {
        splash.style.transition = 'opacity 0.4s ease-in-out';
        splash.style.opacity = '0';

        setTimeout(() => {
          Engine.goTo(1);
          // Remove splash from flow
          splash.style.display = 'none';
        }, 400);
      }, 2100);
    }, 100);
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', Splash.init);
