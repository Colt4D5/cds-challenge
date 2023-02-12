const themeToggle = document.querySelector('input.toggle');

// set theme cookie
function checkCookie(cname, exdays) {
  var cvalue = getCookie(cname);
  // checking whether user is null or not
  if (cvalue === "") {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setCookie(cname, 'dark', exdays);
  }
}
checkCookie('theme', 30);

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


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