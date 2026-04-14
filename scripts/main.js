const themeToggle = document.querySelector('.theme-toggle');
const bodyElement = document.body;
const modal = document.querySelector('.modal-backdrop');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.querySelector('#contact-form');
const subscribeForm = document.querySelector('#newsletter-form');

function setTheme(mode) {
  if (mode === 'dark') {
    bodyElement.classList.add('dark-mode');
    localStorage.setItem('site-theme', 'dark');
  } else {
    bodyElement.classList.remove('dark-mode');
    localStorage.setItem('site-theme', 'light');
  }
}

document.body.classList.add('js-enabled');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = bodyElement.classList.toggle('dark-mode');
    setTheme(isDark ? 'dark' : 'light');
  });
}

const storedTheme = localStorage.getItem('site-theme');
if (storedTheme) {
  setTheme(storedTheme);
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const spinner = modal.querySelector('.spinner');
    spinner.style.display = 'block';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal h2').textContent = 'Procesando información';
    modal.querySelector('.modal p').textContent = 'Gracias por contactarnos, estamos preparando tu consulta.';
    setTimeout(() => {
      modal.querySelector('.modal h2').textContent = 'Envío exitoso';
      modal.querySelector('.modal p').textContent = 'Hemos recibido tu mensaje. Pronto un asesor se comunicará contigo.';
      spinner.style.display = 'none';
      modalClose.focus();
      contactForm.reset();
    }, 1700);
  });
}

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('¡Gracias por suscribirte! Revisa tu correo para novedades de destinos.');
    subscribeForm.reset();
  });
}

const closeModal = () => {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  modal.querySelector('.spinner').style.display = 'block';
};

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

const revealElements = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add('reveal'));
}

const statCounters = document.querySelectorAll('.stat-number');
const animateStat = (element) => {
  const target = parseInt(element.dataset.target, 10) || 0;
  const suffix = element.dataset.suffix || '';
  const duration = 1700;
  const startTime = performance.now();

  const update = (time) => {
    const elapsed = Math.min((time - startTime) / duration, 1);
    const current = Math.floor(elapsed * target);
    element.textContent = `${current}${suffix}`;
    if (elapsed < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  };

  requestAnimationFrame(update);
};

if (statCounters.length > 0) {
  statCounters.forEach((counter) => animateStat(counter));
}
