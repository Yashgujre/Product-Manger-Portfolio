const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
document.documentElement.setAttribute('data-theme', 'dark');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
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

const parseMetricValue = (value) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
};

const animateCounter = (el) => {
  const source = el.dataset.target || el.textContent.trim();
  const target = parseMetricValue(source);
  if (!el.dataset.target) el.dataset.target = source;
  if (target === 0) return;
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const decimals = String(target).includes('.') ? 1 : 0;
  const duration = 1100;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = (target * eased).toFixed(decimals);
    el.textContent = `${prefix}${value}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.dataset.animated = 'true';
    }
  };

  requestAnimationFrame(tick);
};

const counterEls = document.querySelectorAll('[data-counter]');
if (counterEls.length) {
  const seen = new WeakSet();
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || seen.has(entry.target)) return;
        seen.add(entry.target);
        animateCounter(entry.target);
      });
    },
    { threshold: 0.25 }
  );
  counterEls.forEach((el) => counterObserver.observe(el));
}

const progressEls = document.querySelectorAll('[data-progress]');
if (progressEls.length) {
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const value = entry.target.getAttribute('data-progress') || '0';
        entry.target.style.width = `${Math.min(Number(value), 100)}%`;
        progressObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );
  progressEls.forEach((el) => progressObserver.observe(el));
}

const rotator = document.querySelector('[data-rotator]');
if (rotator) {
  const messages = [
    'Operational speed gains of 30-40% in critical workflows',
    'Up to 292% ROI delivered in enterprise operating environments',
    'Risk reduction and compliance controls sustained at scale',
    'Reliability performance maintained at 99.7% to 99.98% uptime',
  ];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % messages.length;
    rotator.style.opacity = '0';
    setTimeout(() => {
      rotator.querySelector('span').textContent = messages[i];
      rotator.style.opacity = '1';
    }, 170);
  }, 2600);
}

const experienceCards = Array.from(document.querySelectorAll('.experience-card'));
if (experienceCards.length) {
  const viewedProjects = new Set();
  const progressEl = document.querySelector('[data-exp-progress]');
  const activeFiltersEl = document.querySelector('[data-active-filters]');

  const industryButtons = Array.from(document.querySelectorAll('[data-filter-industry]'));
  const impactButtons = Array.from(document.querySelectorAll('[data-filter-impact]'));
  const searchInput = document.querySelector('[data-exp-search]');
  const roiInput = document.querySelector('[data-exp-roi]');
  const roiLabel = document.querySelector('[data-exp-roi-value]');

  const filterState = {
    industry: 'all',
    impact: 'all',
    roi: 0,
    query: '',
  };

  const updateViewedProgress = () => {
    if (!progressEl) return;
    progressEl.textContent = `${viewedProjects.size} / ${experienceCards.length}`;
  };

  const collapseCard = (card) => {
    const panel = card.querySelector('.experience-expanded');
    if (!panel) return;
    panel.hidden = true;
    card.classList.remove('expanded');
  };

  const expandCard = (card) => {
    experienceCards.forEach((otherCard) => {
      if (otherCard !== card) collapseCard(otherCard);
    });
    const panel = card.querySelector('.experience-expanded');
    if (!panel) return;
    panel.hidden = false;
    card.classList.add('expanded');
    const cardId = card.getAttribute('id');
    if (cardId) viewedProjects.add(cardId);
    updateViewedProgress();

    panel.querySelectorAll('[data-counter]').forEach((counterEl) => {
      if (counterEl.dataset.animated === 'true') return;
      animateCounter(counterEl);
    });
  };

  experienceCards.forEach((card) => {
    const openBtn = card.querySelector('[data-exp-open]');
    const closeBtn = card.querySelector('[data-exp-close]');

    if (openBtn) {
      openBtn.addEventListener('click', () => expandCard(card));
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => collapseCard(card));
    }
  });

  experienceCards.forEach((card) => {
    const journey = card.querySelector('[data-journey]');
    if (!journey) return;
    const nodes = Array.from(journey.querySelectorAll('.journey-node'));
    const panels = Array.from(card.querySelectorAll('.journey-panel'));

    nodes.forEach((node) => {
      node.addEventListener('click', () => {
        const target = node.getAttribute('data-step');
        nodes.forEach((n) => n.classList.toggle('active', n === node));
        panels.forEach((panel) => {
          panel.classList.toggle('active', panel.getAttribute('data-step-panel') === target);
        });
      });
    });
  });

  experienceCards.forEach((card) => {
    const compareBlocks = card.querySelectorAll('[data-compare]');
    compareBlocks.forEach((block) => {
      const modeButtons = Array.from(block.querySelectorAll('[data-compare-mode]'));
      const values = Array.from(block.querySelectorAll('[data-compare-value]'));

      modeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const mode = btn.getAttribute('data-compare-mode') || 'before';
          modeButtons.forEach((b) => b.classList.toggle('active', b === btn));
          values.forEach((valueEl) => {
            valueEl.textContent = mode === 'after' ? valueEl.dataset.after || '' : valueEl.dataset.before || '';
          });
        });
      });
    });
  });

  const setButtonGroupState = (buttons, targetValue, dataKey) => {
    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset[dataKey] === targetValue);
    });
  };

  const renderActiveFilterChips = () => {
    if (!activeFiltersEl) return;
    activeFiltersEl.innerHTML = '';

    const chips = [];
    if (filterState.industry !== 'all') {
      chips.push({ key: 'industry', label: `Industry: ${filterState.industry}` });
    }
    if (filterState.impact !== 'all') {
      chips.push({ key: 'impact', label: `Impact: ${filterState.impact}` });
    }
    if (filterState.roi > 0) {
      chips.push({ key: 'roi', label: `Min ROI: ${filterState.roi}%` });
    }
    if (filterState.query) {
      chips.push({ key: 'query', label: `Search: ${filterState.query}` });
    }

    chips.forEach((chip) => {
      const node = document.createElement('span');
      node.className = 'active-filter-chip';
      node.innerHTML = `${chip.label} <button type=\"button\" data-clear-filter=\"${chip.key}\" aria-label=\"Remove ${chip.key} filter\">x</button>`;
      activeFiltersEl.appendChild(node);
    });
  };

  const applyExperienceFilters = () => {
    experienceCards.forEach((card) => {
      const industry = card.dataset.industry || '';
      const impacts = (card.dataset.impact || '').split(' ');
      const searchSource = (card.dataset.search || '').toLowerCase();
      const roi = Number(card.dataset.roi || '0');

      const matchIndustry = filterState.industry === 'all' || industry === filterState.industry;
      const matchImpact = filterState.impact === 'all' || impacts.includes(filterState.impact);
      const matchROI = roi >= filterState.roi;
      const matchQuery = !filterState.query || searchSource.includes(filterState.query);

      const visible = matchIndustry && matchImpact && matchROI && matchQuery;
      card.classList.toggle('filtered-out', !visible);
      if (!visible) collapseCard(card);
    });

    renderActiveFilterChips();
  };

  industryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterState.industry = btn.dataset.filterIndustry || 'all';
      setButtonGroupState(industryButtons, filterState.industry, 'filterIndustry');
      applyExperienceFilters();
    });
  });

  impactButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterState.impact = btn.dataset.filterImpact || 'all';
      setButtonGroupState(impactButtons, filterState.impact, 'filterImpact');
      applyExperienceFilters();
    });
  });

  if (roiInput && roiLabel) {
    const updateROI = () => {
      filterState.roi = Number(roiInput.value || '0');
      roiLabel.textContent = `${filterState.roi}%`;
      applyExperienceFilters();
    };
    roiInput.addEventListener('input', updateROI);
    updateROI();
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterState.query = searchInput.value.trim().toLowerCase();
      applyExperienceFilters();
    });
  }

  if (activeFiltersEl) {
    activeFiltersEl.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const key = target.getAttribute('data-clear-filter');
      if (!key) return;

      if (key === 'industry') {
        filterState.industry = 'all';
        setButtonGroupState(industryButtons, 'all', 'filterIndustry');
      }
      if (key === 'impact') {
        filterState.impact = 'all';
        setButtonGroupState(impactButtons, 'all', 'filterImpact');
      }
      if (key === 'roi' && roiInput && roiLabel) {
        filterState.roi = 0;
        roiInput.value = '0';
        roiLabel.textContent = '0%';
      }
      if (key === 'query' && searchInput) {
        filterState.query = '';
        searchInput.value = '';
      }

      applyExperienceFilters();
    });
  }

  updateViewedProgress();
  applyExperienceFilters();

  const experienceRotator = document.querySelector('[data-exp-rotator] span');
  if (experienceRotator) {
    const messages = [
      'Challenge to outcome narrative with interactive method breakdown.',
      'Open each project to inspect delivery process, governance, and results.',
      'Use filters to compare outcomes by industry, impact type, and ROI threshold.',
      'Every project maps challenge, solution journey, and quantifiable business impact.',
    ];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % messages.length;
      experienceRotator.parentElement.style.opacity = '0';
      setTimeout(() => {
        experienceRotator.textContent = messages[idx];
        experienceRotator.parentElement.style.opacity = '1';
      }, 170);
    }, 3000);
  }
}
