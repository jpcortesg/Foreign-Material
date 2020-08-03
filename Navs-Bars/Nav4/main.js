let marker = document.querySelector('#marker')
let item = document.querySelectorAll('nav a')

function indicator(e){
  marker.style.left = e.offsetLeft+'px';
  marker.style.width = e.offsetWidth+'px';
  marker.style.transition = Math.floor(Math.random() * (2 - +0.5)) + +0.5 + 's';
}

item.forEach(link =>{
  link.addEventListener('click', (e)=>{
    indicator(e.target);
  })
})