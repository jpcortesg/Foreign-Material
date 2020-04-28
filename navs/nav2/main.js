const icon = document.querySelector('.icon');
const act = document.querySelector('.act');

let active = true;

icon.addEventListener('click', function () {
  if (active) {
    act.classList.remove('des');
    active = false;
  } else {
    act.classList.add('des');
    active = true;
  }
});