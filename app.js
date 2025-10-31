/**
 * Script para Interatividade do Site Keke Dú Corte
 * 1. Menu Mobile (Hamburger)
 * 2. Lightbox da Galeria
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Menu Mobile ---
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.querySelector('.nav-principal');
  
    function toggleMenu(event) {
      if (event.type === 'touchstart') event.preventDefault();
      
      if (nav) {
        nav.classList.toggle('active');
      }
      
      if (btnMobile) {
        const active = nav ? nav.classList.contains('active') : false;
        btnMobile.classList.toggle('active');
        btnMobile.setAttribute('aria-expanded', active.toString());
        btnMobile.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
      }
    }
  
    if (btnMobile) {
      btnMobile.addEventListener('click', toggleMenu);
      btnMobile.addEventListener('touchstart', toggleMenu);
    }
  
    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (e) => {
      if (nav && btnMobile) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnButton = btnMobile.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnButton && nav.classList.contains('active')) {
          toggleMenu(new Event('click')); // Simula um clique para fechar
        }
      }
    });
  
  
    // --- 2. Lightbox da Galeria ---
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
  
    const galleryImages = document.querySelectorAll('.galeria-img');
  
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        if (modal && modalImg && captionText) {
          modal.style.display = 'block';
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
        }
      });
    });
  
    // Fecha o modal pelo botão 'x'
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (modal) {
          modal.style.display = 'none';
        }
      });
    }
  
    // Fecha o modal clicando fora da imagem
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  
  });
  