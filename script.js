<script>
  // Animacja fade-in przy przewijaniu
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.gallery img').forEach(img => {
    img.classList.add('hidden');
    observer.observe(img);
  });

  // Lightbox - powiększanie zdjęcia
  const createLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightbox.innerHTML = '';
    });

    document.querySelectorAll('.gallery img').forEach(image => {
      image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.innerHTML = '';
        lightbox.appendChild(img);
      });
    });
  };

  createLightbox();
</script>
