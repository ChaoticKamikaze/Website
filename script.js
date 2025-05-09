// Smooth scroll for filter links
document.querySelectorAll('.filter-link').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox functionality
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
