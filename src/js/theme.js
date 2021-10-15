const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchItem = document.querySelector('#theme-switch-toggle');

switchItem.addEventListener('change', changeTheme);

function changeTheme(evt)
{  const checkEvt = evt.currentTarget.checked;
  if (checkEvt) {
    checkedTheme();
  }
  else {
    notCheckedTheme();
  }
}

  function checkedTheme() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  switchItem.checked = true;
}

function notCheckedTheme() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  switchItem.checked = false;
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT) {
    notCheckedTheme();
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedTheme();
    return;
  }
}
currentTheme();