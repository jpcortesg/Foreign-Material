const imgSilder = (anything) => {
  document.querySelector('.starbucks').src = './images/' + anything
  console.log('oe');
}

const changeCircleColor = (color) => {
  const circle = document.querySelector('.circle')
  circle.style.background = color
}