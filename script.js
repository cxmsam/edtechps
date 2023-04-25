document.querySelectorAll('.hotspot').forEach(hotspot => {
  hotspot.addEventListener('touchstart', () => {
    hotspot.style.opacity = 1;
  });

  hotspot.addEventListener('touchend', () => {
    hotspot.style.opacity = 0;
  });
});
