(() => {
  'use strict';

  const sessions = {
    '6XyJfN6gxa4': {
      title: 'Sunset DJ Set by the Lake',
      subtitle: 'Tactik Podcast Series #11 · 53:19 · 12 Oct 2026'
    },
    'b8NKJ09QazY': {
      title: 'Coworkperativa',
      subtitle: 'SaFitiCumintiGallery / Minimal & deep'
    },
    'svvKjA2oFY4': {
      title: 'Hidden — The Social Space',
      subtitle: 'SaFitiCumintiGallery / Minimal & deep'
    },
    'W6Jn7fEphzY': {
      title: 'Solo Ridin’ 001',
      subtitle: 'Swaylo P / Recorded session'
    },
    'L86M5-AB7ug': {
      title: 'We Be Clubbin’ — EP. 38',
      subtitle: 'Swaylo P & Shar-K / Radio DEEA'
    },
    '3GcJn6fqY9s': {
      title: 'We Be Clubbin’ — EP. 21',
      subtitle: 'Swaylo P & Shar-K / Radio DEEA'
    }
  };

  const isPlainActivation = event => event.button === 0 &&
    !event.defaultPrevented && !event.metaKey && !event.ctrlKey &&
    !event.shiftKey && !event.altKey;

  const initializeSets = () => {
    const section = document.getElementById('sets');
    if (!section || section.dataset.setsInitialized === 'true') return;

    const stage = section.querySelector('#featured-video');
    const title = section.querySelector('.session-title');
    const subtitle = section.querySelector('.session-location');
    const externalLink = section.querySelector('[data-set-external]');
    const status = section.querySelector('#set-status');
    const choices = Array.from(section.querySelectorAll('.set-row[data-youtube-id]'));
    const posterLauncher = section.querySelector('#video-launch');

    if (!stage || !title || !subtitle || !externalLink || !choices.length) return;
    section.dataset.setsInitialized = 'true';

    const playSession = (id, scrollToPlayer) => {
      const session = sessions[id];
      if (!session) return;

      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = 'Swaylo P — ' + session.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;

      // Removing the previous frame also stops the previously selected set.
      stage.replaceChildren(iframe);
      stage.dataset.youtubeId = id;
      title.textContent = session.title;
      subtitle.textContent = session.subtitle;
      externalLink.href = 'https://www.youtube.com/watch?v=' + id;
      externalLink.setAttribute('aria-label', 'Open ' + session.title + ' on YouTube');

      choices.forEach(choice => {
        if (choice.dataset.youtubeId === id) {
          choice.setAttribute('aria-current', 'true');
        } else {
          choice.removeAttribute('aria-current');
        }
      });

      if (status) status.textContent = 'Selected: ' + session.title + '.';

      if (scrollToPlayer && window.matchMedia('(max-width: 800px)').matches) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        stage.scrollIntoView({ block: 'start', behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    };

    choices.forEach(choice => {
      const session = sessions[choice.dataset.youtubeId];
      if (!session) return;

      choice.setAttribute('aria-label', 'Play ' + session.title + ' in the featured player');
      choice.addEventListener('click', event => {
        if (!isPlainActivation(event)) return;
        event.preventDefault();
        playSession(choice.dataset.youtubeId, true);
      });
    });

    if (posterLauncher) {
      posterLauncher.addEventListener('click', event => {
        if (!isPlainActivation(event)) return;
        event.preventDefault();
        playSession(posterLauncher.dataset.youtubeId || '6XyJfN6gxa4', false);
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSets, { once: true });
  } else {
    initializeSets();
  }
})();
