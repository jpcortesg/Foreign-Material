const burger = document.querySelector('.nav_burger');
const items = document.querySelector('.nav_items');
const burger_btn = document.querySelector('.nav_burger_btn');

let active = false;

burger.addEventListener('click', function(){

  if(active){
    items.classList.remove('active');
    burger_btn.classList.remove('active');

    active = false;

  }else{
    items.classList.add('active');
    burger_btn.classList.add('active');

    active = true;
  }

});