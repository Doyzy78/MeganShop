const bgMusic = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('toggleBtn');
const musicSelect = document.getElementById('musicSelect');

// Play/pause toggle
toggleBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(err => console.log("Play blocked:", err));
    toggleBtn.textContent = '⏸️ Pause';
  } else {
    bgMusic.pause();
    toggleBtn.textContent = '▶ Play';
  }
});

// Change music track
musicSelect.addEventListener('change', () => {
  bgMusic.src = musicSelect.value;
  bgMusic.play().catch(err => console.log("Play blocked:", err));
  toggleBtn.textContent = '⏸️ Pause';
});
