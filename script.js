const toggle = document.getElementById('themeToggle');
const label = document.getElementById('modeLabel');
const body = document.body;

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.remove('kid');
    body.classList.add('adult');
    label.textContent = 'Adult Mode';
  } else {
    body.classList.remove('adult');
    body.classList.add('kid');
    label.textContent = 'Kid Mode';
  }
});
