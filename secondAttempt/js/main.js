const burger = document.querySelector('.nav_burger');
const items = document.querySelector('.nav_items');
const burger_btn = document.querySelector('.nav_burger_btn');

let active = false;

burger.addEventListener('click', activeFun);