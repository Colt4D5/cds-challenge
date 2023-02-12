const themeToggle = document.querySelector('input.toggle');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('html').dataset.theme = 'dark';
  themeToggle.checked = false;
} else {
  document.querySelector('html').dataset.theme = 'light';
  themeToggle.checked = true;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  const newColorScheme = event.matches ? "dark" : "light";
  document.querySelector('html').dataset.theme = newColorScheme;
  themeToggle.checked = newColorScheme === "dark" ? false : true;
});

themeToggle.addEventListener('change', e => {
  document.querySelector('html').dataset.theme = e.target.checked ? 'light' : 'dark';
})