function activeFun(){
  if(active){
    items.classList.remove('active');
    burger_btn.classList.remove('active');

    active = false;

  }else{
    items.classList.add('active');
    burger_btn.classList.add('active');

    active = true;
  }
}

function toggleForm(){
  var container = document.querySelector('.form_container');
  container.classList.toggle('form_active');
}