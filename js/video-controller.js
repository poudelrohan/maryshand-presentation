// Video Controller — auto-play/pause videos per slide

const VideoController = (() => {
  function init() {
    document.querySelectorAll('.slide').forEach(slide => {
      slide.addEventListener('slideenter', () => {
        // Play all videos in this slide
        slide.querySelectorAll('video').forEach(v => {
          if (v.dataset.autoplay !== 'false') {
            v.currentTime = 0;
            v.play().catch(() => {});
          }
        });
      });

      slide.addEventListener('slideleave', () => {
        // Pause all videos in this slide
        slide.querySelectorAll('video').forEach(v => {
          v.pause();
        });
      });
    });
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', VideoController.init);
