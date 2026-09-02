function initializeCosmicAtmosphere() {
  if (document.querySelector('.cosmic-background')) return;
  const atmosphere = document.createElement('div');
  atmosphere.className = 'cosmic-background';
  atmosphere.setAttribute('aria-hidden', 'true');
  atmosphere.innerHTML = '<div class="stars stars-small"></div><div class="stars stars-medium"></div><div class="stars stars-large"></div>';
  const particleCount = window.matchMedia('(max-width: 800px)').matches ? 10 : 20;
  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement('span');
    particle.className = 'cosmic-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${60 + Math.random() * 48}%`;
    particle.style.setProperty('--particle-time', `${14 + Math.random() * 14}s`);
    particle.style.setProperty('--particle-drift', `${-35 + Math.random() * 70}px`);
    particle.style.animationDelay = `${-Math.random() * 18}s`;
    atmosphere.appendChild(particle);
  }
  document.body.prepend(atmosphere);
  document.body.classList.add('cosmic-ready');

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.matchMedia('(min-width: 801px)').matches) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);
    let pointerFrame;
    document.addEventListener('pointermove', event => {
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
        pointerFrame = null;
      });
    }, { passive: true });
  }
}

initializeCosmicAtmosphere();
