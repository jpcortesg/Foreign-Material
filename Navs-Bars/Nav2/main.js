const icon = document.querySelector('.icon');
const act = document.querySelector('.act');
const navLinks = document.querySelectorAll('.act li')

let active = true;

icon.addEventListener('click', function () {
  if (active) {
    act.classList.remove('des');
    active = false;
  } else {
    act.classList.add('des');
    active = true;
  }

  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ``;
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  icon.classList.toggle('toggle');
});