(() => {
  'use strict';

  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeLabel = document.querySelector('[data-theme-label]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  const setTheme = (theme, persist = false) => {
    root.dataset.theme = theme;
    if (persist) localStorage.setItem('rhi-theme', theme);
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
  };

  setTheme(root.dataset.theme || 'light');

  themeToggle?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  systemTheme.addEventListener('change', (event) => {
    if (!localStorage.getItem('rhi-theme')) setTheme(event.matches ? 'dark' : 'light');
  });

  const header = document.querySelector('[data-header]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 10);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const content = window.siteContent;
  if (!content) return;

  const escapeHTML = (value) =>
    String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');

  const researchGrid = document.querySelector('[data-research-grid]');
  if (researchGrid) {
    const research = [...content.research].sort((a, b) => b.dateKey.localeCompare(a.dateKey));

    researchGrid.innerHTML = research
      .map(
        (item, index) => `
          <article
            class="research-card${item.featured ? ' is-featured' : ''}"
            data-categories="${escapeHTML(item.categories.join(' '))}"
          >
            <a href="${escapeHTML(item.href)}">
              <div class="card-top">
                <span>${escapeHTML(item.type)}</span>
                <span class="card-index">${String(index + 1).padStart(2, '0')} / ${escapeHTML(item.date)}</span>
              </div>
              <h3>${escapeHTML(item.title)}</h3>
              <p class="card-summary">${escapeHTML(item.summary)}</p>
              <div class="card-footer">
                <ul class="tag-list" aria-label="Topics">
                  ${item.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join('')}
                </ul>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          </article>
        `
      )
      .join('');

    const filterButtons = [...document.querySelectorAll('[data-filter]')];
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((candidate) => {
          const active = candidate === button;
          candidate.classList.toggle('is-active', active);
          candidate.setAttribute('aria-pressed', String(active));
        });

        researchGrid.querySelectorAll('.research-card').forEach((card) => {
          const categories = card.dataset.categories.split(' ');
          card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
        });
      });
    });
  }

  const advisoryList = document.querySelector('[data-advisory-list]');
  if (advisoryList) {
    advisoryList.innerHTML = content.advisories
      .map(
        (item) => `
          <a class="advisory-row" href="${escapeHTML(item.href)}">
            <span class="advisory-year">${escapeHTML(item.year)}</span>
            <span class="advisory-main">
              <span class="advisory-id">${escapeHTML(item.id)}</span>
              <strong>${escapeHTML(item.component)}</strong>
            </span>
            <span class="advisory-meta">
              <span class="advisory-platform">${escapeHTML(item.platform)}</span>
              <span class="advisory-impact">${escapeHTML(item.impact)}</span>
            </span>
            <span class="row-arrow" aria-hidden="true">↗</span>
          </a>
        `
      )
      .join('');
  }

  const recognitionList = document.querySelector('[data-recognition-list]');
  if (recognitionList) {
    recognitionList.innerHTML = content.recognition
      .map(
        (item) => `
          <div class="recognition-item">
            <span>${escapeHTML(item.year)}</span>
            <a href="${escapeHTML(item.href)}">${escapeHTML(item.label)} <span aria-hidden="true">↗</span></a>
          </div>
        `
      )
      .join('');
  }

  const talkList = document.querySelector('[data-talk-list]');
  if (talkList) {
    talkList.innerHTML = content.talks
      .map(
        (item) => `
          <a class="talk-row" href="${escapeHTML(item.href)}">
            <span class="talk-date">${escapeHTML(item.date)}</span>
            <span class="talk-main">
              <span class="talk-venue">${escapeHTML(item.venue)}</span>
              <strong>${escapeHTML(item.title)}</strong>
            </span>
            <span class="talk-type">${escapeHTML(item.type)}</span>
            <span class="row-arrow" aria-hidden="true">↗</span>
          </a>
        `
      )
      .join('');
  }
})();
