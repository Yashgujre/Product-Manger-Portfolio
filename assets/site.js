const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
};

setTheme(getInitialTheme());

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.getAttribute('data-delay') || 0);
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.01,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  reveals.forEach((node) => revealObserver.observe(node));
} else {
  reveals.forEach((node) => node.classList.add('visible'));
}

const navLinks = Array.from(document.querySelectorAll('.nav-pills a'));
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach((link) => {
  const target = link.getAttribute('href');
  const targetPath = target ? target.split('/').pop() : '';
  link.classList.toggle('active', targetPath === currentPath);
});

const caseModal = document.getElementById('case-modal');
const caseLinks = document.querySelectorAll('[data-case-link]');
const caseModalClose = document.querySelector('[data-case-modal-close]');

const closeCaseModal = () => {
  if (!caseModal) return;
  caseModal.setAttribute('aria-hidden', 'true');
};

const openCaseModal = () => {
  if (!caseModal) return;
  caseModal.setAttribute('aria-hidden', 'false');
};

caseLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openCaseModal();
  });
});

if (caseModalClose) {
  caseModalClose.addEventListener('click', closeCaseModal);
}

if (caseModal) {
  caseModal.addEventListener('click', (event) => {
    if (event.target === caseModal) closeCaseModal();
  });
}
