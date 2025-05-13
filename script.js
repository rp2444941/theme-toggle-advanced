const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Load saved theme or system preference
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
    icon.textContent = '🌙';
  } else {
    document.body.classList.remove('dark');
    icon.textContent = '🌞';
  }
}

// Toggle and save theme
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  icon.textContent = theme === 'dark' ? '🌙' : '🌞';
});

loadTheme();
