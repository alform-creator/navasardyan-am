(() => {
  const ready = () => {
    const menuBtn = document.querySelector('[data-menu]');
    const nav = document.querySelector('.nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
      });
      nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }));
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          nav.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
    const search = document.getElementById('articleSearch');
    if (search) {
      search.addEventListener('input', () => {
        let count = 0;
        document.querySelectorAll('[data-article]').forEach((card) => {
          const visible = (card.dataset.search || '').toLocaleLowerCase().includes(search.value.trim().toLocaleLowerCase());
          card.hidden = !visible;
          if (visible) count++;
        });
        const empty = document.getElementById('noResults');
        if (empty) empty.hidden = !!count;
      });
    }
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const greeting = form.dataset.greeting || 'Hello, I would like to book a consultation.';
        const name = String(data.get('name') || '').trim();
        const note = String(data.get('note') || '').trim();
        const message = [greeting, name ? 'Name: ' + name : '', note ? 'Note: ' + note : ''].filter(Boolean).join('\n');
        window.open('https://wa.me/37498098774?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
      });
    }
    // Mobile action dock is revealed only after the hero's primary contact actions scroll away.
    const mobileDock = document.querySelector('.mobile-dock');
    const updateMobileDock = () => {
      if (!mobileDock) return;
      const heroActions = document.querySelector('.hero-buttons');
      const hiddenPrimaryActions = heroActions ? heroActions.getBoundingClientRect().bottom < 0 : scrollY > 600;
      mobileDock.classList.toggle('dock-visible', hiddenPrimaryActions);
    };
    addEventListener('scroll', updateMobileDock, { passive: true });
    updateMobileDock();
    // Lightweight reading progress and frosted header state.
    const progress = document.querySelector('.reading-progress');
    const header = document.querySelector('.header-atelier');
    let framePending = false;
    const updateScrollUI = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      if (progress) progress.style.width = `${Math.min(100, scrollY / max * 100)}%`;
      if (header) header.classList.toggle('is-scrolled', scrollY > 16);
      framePending = false;
    };
    addEventListener('scroll', () => {
      if (!framePending) { framePending = true; requestAnimationFrame(updateScrollUI); }
    }, { passive: true });
    updateScrollUI();
    // Progressive enhancement, never hide content if JavaScript is unavailable.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    } else {
      document.documentElement.classList.add('motion-ready');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
