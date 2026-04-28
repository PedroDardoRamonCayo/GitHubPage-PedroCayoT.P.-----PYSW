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

// jQuery functionalities
$(document).ready(function() {
  // Animación de texto en hero
  $('.hero-content h1').hide().fadeIn(2000);
  $('.hero-content p').hide().delay(500).fadeIn(2000);
  $('.hero-actions').hide().delay(1000).fadeIn(2000);

  // Hover en cards
  $('.card').hover(
    function() { $(this).addClass('hover-effect'); },
    function() { $(this).removeClass('hover-effect'); }
  );

  // Validación en tiempo real para newsletter
  $('#newsletter-email').on('input', function() {
    const email = $(this).val();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    $(this).toggleClass('is-invalid', !isValid && email.length > 0);
    $(this).toggleClass('is-valid', isValid);
  });

  // Phishing quiz
  $('#check-answer').click(function() {
    const selected = $('input[name="phishing-option"]:checked').val();
    if (selected === 'phishing') {
      $('#feedback').html('<div class="alert alert-success">¡Correcto! Esa es una señal de phishing.</div>');
    } else {
      $('#feedback').html('<div class="alert alert-danger">Incorrecto. Revisa las señales de fraude.</div>');
    }
  });

  // Animaciones al scroll
  $(window).scroll(function() {
    $('.blog-card').each(function() {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) {
        $(this).animate({opacity: 1, marginTop: 0}, 1000);
      }
    });
  });

  // Inicializar tooltips de Bootstrap
  $('[data-bs-toggle="tooltip"]').tooltip();

  // Filtros dinámicos en destinos
  $('.filter-btn').click(function() {
    const filter = $(this).data('filter');
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    if (filter === 'all') {
      $('.zoom-card').show();
    } else {
      $('.zoom-card').hide();
      $(`.zoom-card[data-category="${filter}"]`).show();
    }
  });

  // Zoom en cards
  $('.zoom-card').hover(
    function() { $(this).addClass('zoom-effect'); },
    function() { $(this).removeClass('zoom-effect'); }
  );

  // Rating interactivo
  $('.rating i').click(function() {
    const rating = $(this).index() + 1;
    $(this).siblings().removeClass('fas').addClass('far');
    $(this).prevAll().addBack().removeClass('far').addClass('fas');
    $(this).parent().data('rating', rating);
  });

  // Validación en tiempo real para contacto
  $('#contact-form input, #contact-form select, #contact-form textarea').on('input change', function() {
    const field = $(this);
    const value = field.val().trim(); // Sanitización básica: trim
    let isValid = true;

    if (field.attr('type') === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else if (field.attr('minlength')) {
      isValid = value.length >= field.attr('minlength');
    } else if (field.prop('required')) {
      isValid = value.trim() !== '';
    }

    field.toggleClass('is-invalid', !isValid && value.length > 0);
    field.toggleClass('is-valid', isValid && value.length > 0);
  });

  // Submit form
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    const form = $(this);
    const spinner = form.find('.spinner-border');
    spinner.removeClass('d-none');
    form.find('button[type="submit"]').prop('disabled', true);

    setTimeout(function() {
      spinner.addClass('d-none');
      form.find('button[type="submit"]').prop('disabled', false);
      $('#confirmationModal').modal('show');
      form[0].reset();
      form.find('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
    }, 2000);
  });
});
