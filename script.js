document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      // Replace this placeholder with a secure form endpoint before production.
      const data = new FormData(form);
      const subject = encodeURIComponent('Clear Fault Legal — Case Review Inquiry');
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nOrganization: ${data.get('firm')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nIncident type: ${data.get('incident')}\nJurisdiction: ${data.get('location')}\n\nProject description (non-confidential):\n${data.get('summary')}\n\nI understand this is an initial inquiry only.`
      );
      const status = document.getElementById('form-status');
      status.textContent = 'Opening your email application. Review the message and send it to the business contact address once configured.';
      // TODO: Replace with the verified business inquiry email before launch.
      window.location.href = `mailto:REPLACE-WITH-VERIFIED-CONTACT-EMAIL?subject=${subject}&body=${body}`;
    });
  }
});
