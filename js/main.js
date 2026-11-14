/**
 * BEETHOVENS – German Gurukul (Official JavaScript)
 * Clean, lightweight, dependency-free vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isExpanded = mobileNav.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // 2. Fast Typewriter Effect on Hero
  const typewriterEl = document.getElementById('typewriter-text');
  if (typewriterEl) {
    const text =
      'A1 to B2 German training with Goethe Institute exam in small batches of just 10-15 students right there in Rohtak.';
    let index = 0;
    let isDeleting = false;

    function typeLoop() {
      if (!isDeleting && index <= text.length) {
        typewriterEl.textContent = text.slice(0, index);
        index++;
        setTimeout(typeLoop, 35);
      } else if (!isDeleting && index > text.length) {
        setTimeout(() => {
          isDeleting = true;
          typeLoop();
        }, 4000);
      } else if (isDeleting && index >= 0) {
        typewriterEl.textContent = text.slice(0, index);
        index -= 2;
        setTimeout(typeLoop, 15);
      } else if (isDeleting && index < 0) {
        isDeleting = false;
        index = 0;
        setTimeout(typeLoop, 400);
      }
    }
    typeLoop();
  }

  // 3. Contact Form: Auto-select level from ?level= parameter
  const levelSelect = document.getElementById('enquiry-level');
  if (levelSelect) {
    const params = new URLSearchParams(window.location.search);
    const lvl = params.get('level');
    if (lvl) {
      for (let i = 0; i < levelSelect.options.length; i++) {
        if (levelSelect.options[i].value.toLowerCase() === lvl.toLowerCase()) {
          levelSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  // 4. Smooth scroll to hash anchor if present (e.g. #enquiry-form, #campus-tour)
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }

  // 5. Contact Form Submission -> WhatsApp Handshake & Confirmation Screen
  const enquiryForm = document.getElementById('contact-form');
  const successCard = document.getElementById('enquiry-success');
  const successName = document.getElementById('success-name');
  const whatsappContinueBtn = document.getElementById('whatsapp-continue-btn');
  const resetBtn = document.getElementById('reset-enquiry-btn');

  if (enquiryForm && successCard) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const level = levelSelect ? levelSelect.value : '';
      const message = document.getElementById('form-message').value.trim();

      if (!name || !phone) {
        alert('Please enter your full name and phone number.');
        return;
      }

      // Compile pre-filled WhatsApp message
      const lines = [
        'Hallo Beethoven German Gurukul!',
        '',
        'I would like to submit an enquiry for German classes:',
        `• Name: ${name}`,
        `• Phone: ${phone}`,
      ];
      if (level) lines.push(`• Level: ${level}`);
      if (email) lines.push(`• Email: ${email}`);
      if (message) lines.push(`• Message: ${message}`);

      const waText = lines.join('\n');
      const waUrl = `https://wa.me/917404548276?text=${encodeURIComponent(waText)}`;

      // Update success UI
      if (successName) successName.textContent = name;
      if (whatsappContinueBtn) whatsappContinueBtn.href = waUrl;

      enquiryForm.style.display = 'none';
      successCard.classList.add('active');

      // Automatically launch WhatsApp in new tab
      window.open(waUrl, '_blank');
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        enquiryForm.reset();
        enquiryForm.style.display = 'block';
        successCard.classList.remove('active');
      });
    }
  }

  // 6. Interactive Lightbox for Facility Tour (About Page)
  const tourItems = document.querySelectorAll('.tour-img-wrap');
  const lightbox = document.getElementById('lightbox-modal');
  if (tourItems.length > 0 && lightbox) {
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lightbox-title');
    const lbTag = document.getElementById('lightbox-tag');
    const lbDesc = document.getElementById('lightbox-desc');
    const lbCounter = document.getElementById('lightbox-counter');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');

    // Build data array from DOM
    const photos = [];
    document.querySelectorAll('.tour-item').forEach((item, idx) => {
      const img = item.querySelector('.tour-img');
      const title = item.querySelector('.tour-title');
      const tag = item.querySelector('.tour-tag');
      const desc = item.querySelector('.tour-desc');
      photos.push({
        src: img ? img.src : '',
        title: title ? title.textContent : '',
        tag: tag ? tag.textContent : '',
        desc: desc ? desc.textContent : '',
      });

      // Click to open
      const wrap = item.querySelector('.tour-img-wrap');
      const link = item.querySelector('.tour-view-link');
      if (wrap) wrap.addEventListener('click', () => openLightbox(idx));
      if (link) link.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(idx);
      });
    });

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      updateLightbox();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightbox() {
      const p = photos[currentIndex];
      if (!p) return;
      if (lbImg) lbImg.src = p.src;
      if (lbTitle) lbTitle.textContent = p.title;
      if (lbTag) lbTag.textContent = p.tag;
      if (lbDesc) lbDesc.textContent = p.desc;
      if (lbCounter) lbCounter.textContent = `${currentIndex + 1} of ${photos.length}`;
    }

    function prevPhoto() {
      currentIndex = (currentIndex - 1 + photos.length) % photos.length;
      updateLightbox();
    }

    function nextPhoto() {
      currentIndex = (currentIndex + 1) % photos.length;
      updateLightbox();
    }

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevPhoto(); });
    if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextPhoto(); });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    window.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    });
  }
});
