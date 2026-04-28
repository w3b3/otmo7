const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  const currentEl = document.getElementById('current');
  const totalEl = document.getElementById('total');
  const progressEl = document.getElementById('progress');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const hint = document.getElementById('hint');

  let current = 0;
  totalEl.textContent = String(total).padStart(2, '0');

  function go(idx) {
    if (idx < 0 || idx >= total) return;
    slides[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');
    currentEl.textContent = String(current + 1).padStart(2, '0');
    progressEl.style.transform = `scaleX(${(current + 1) / total})`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    // Reset scroll position on slide change
    slides[current].scrollTop = 0;
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    if (e.key === 'Home') go(0);
    if (e.key === 'End') go(total - 1);
  });

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Initialize
  go(0);

  // Fade hint after a few seconds
  setTimeout(() => hint.classList.add('fade'), 4000);