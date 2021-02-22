const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchBtn = document.querySelector(`#theme-switch-toggle`);
const body = document.querySelector('body');

storageTheme();
body.classList.add(Theme.LIGHT);
function switchColor() {
  if (body.classList.contains(Theme.LIGHT)) {
    switchDark();
  } else {
    switchLight();
  }
}

function storageTheme() {
  if (localStorage.getItem(`Theme`) === `DARK`) {
    switchDark();
  }
}
function switchLight() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  switchBtn.checked = false;
  localStorage.setItem('Theme', 'LIGHT');
}
function switchDark() {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  switchBtn.checked = true;
  localStorage.setItem('Theme', 'DARK');
}

switchBtn.addEventListener('change', switchColor);
