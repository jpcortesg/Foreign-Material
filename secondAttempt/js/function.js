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