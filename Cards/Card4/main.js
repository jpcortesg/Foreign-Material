const white = document.getElementById('white')
const blue = document.getElementById('blue')
const black = document.getElementById('black')
const active = document.querySelectorAll('.container .image .for_text .size h4')

change('#E5E4E4', './image/1b.jpg')

blue.addEventListener('click', () => {
  change('#383446', './image/2a.jpg')
})

white.addEventListener('click', () => {
  change('#E5E4E4', './image/1b.jpg')
})

black.addEventListener('click', () => {
  change('#2D2A2E', './image/3n.jpg')
})


function change(color, link){
  const body = document.querySelector('body')
  const buttons = document.querySelectorAll('.container .image .for_text .buttons button')
  const image = document.querySelector('.container .image img')
  const price = document.querySelector('.container .image .for_text .top h4')
  image.src = link
  body.style.background = color
  price.style.color = color
  buttons.forEach((e) => {
    e.style.background = color
    e.style.color = '#FFF'
    if(color === '#E5E4E4') { e.style.color = '#000'}
  })
  active.forEach((e) => {
    if(e.style.background != ''){
      e.style.background = color
    }
    e.addEventListener('click', () => {
      active.forEach((e) => {
        e.style.background = ''
      })
      e.style.background = color
    })
  })
}