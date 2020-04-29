const burger = document.querySelector('.toggle');
const item = document.querySelectorAll('.item');

let active = false;

burger.addEventListener('click', function(){
  if(active){
    item.forEach(element => {
      element.classList.remove('active');
    });
    active = false;
  }else{
    item.forEach(element => {
      element.classList.add('active');
    });
    active = true;
  }
});