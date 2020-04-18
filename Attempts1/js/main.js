const menuBtn = document.querySelector('.nav_btn');
const hamburguer = document.querySelectorAll('.nav_btn_burger');
const nav = document.querySelector('.navR');
const menuNav = document.querySelector('.nav_menu');
const navItems = document.querySelectorAll('.nav_menu_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    hamburguer.forEach(item => item.classList.add('open'));
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  }else{
    hamburguer.forEach(item => item.classList.remove('open'));
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}
