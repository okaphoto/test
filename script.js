const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.innerHTML = '';
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    lightbox.appendChild(enlargedImg);
    lightbox.style.display = 'flex';
    setTimeout(() => lightbox.classList.add('show'), 10);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
  setTimeout(() => {
    lightbox.style.display = 'none';
    lightbox.innerHTML = '';
  }, 300);
});
