const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const form = document.querySelector('#enquiry-form');
const feedback = document.querySelector('#form-feedback');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const phone = String(data.get('phone')).trim() || 'Not provided';
    const service = String(data.get('service')).trim();
    const message = String(data.get('message')).trim();
    const text = `Hello DLABA Construction, I would like to request a free quote.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nProject details: ${message}`;
    feedback.textContent = 'Opening WhatsApp with your enquiry. Please review it and press Send in WhatsApp.';
    window.open(`https://wa.me/27609250184?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
