const themeToggle = document.querySelector('input.toggle');

if (getCookie('theme') === 'dark') {
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
  console.log(newColorScheme)
  setCookie('theme', newColorScheme, 30);
});

themeToggle.addEventListener('change', e => {
  document.querySelector('html').dataset.theme = e.target.checked ? 'light' : 'dark';
  console.log(document.querySelector('html').dataset.theme)
  setCookie('theme', document.querySelector('html').dataset.theme, 30);
})