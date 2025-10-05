// Keyboard support
window.addEventListener('keydown', e => playSound(e.keyCode));

// Mouse support
document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', () => {
    const key = pad.getAttribute('data-key');
    triggerSound(key);
  });
});

function playSound(keyCode) {
  triggerSound(keyCode);
}

function triggerSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const pad = document.querySelector(`.drum-pad[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  pad.classList.add('playing');
  setTimeout(() => pad.classList.remove('playing'), 150);
}