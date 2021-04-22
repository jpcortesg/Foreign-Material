// function apply(num, f){
//   return f(num)
// }

// console.log(apply(5, (num) =>  2 * num ));

const dollars = ['32$', '15$', '12$', '17$', '20$']

// Map

  // Forma muy vieja
  let prices = []
  for (let i = 0; i < dollars.length; i++) {
  // '32$' -> 32
  prices[i] = (Number(dollars[i].slice(0, dollars[i].length - 1)))  
  }
  // console.log(prices);

  // Forma vieja
  prices = []
  for(const dollar of dollars){
    prices.push(Number(dollar.slice(0, dollar.length - 1)))  
  }
  // console.log(prices);

  // Forma nueva
  prices = dollars.map( dollar  => Number(dollar.slice(0, dollar.length - 1)) )
  // console.log(prices);

// Filter

  // Vieja
  let expensive = []
  for (const price of prices) {
    if (price >= 20) {
      expensive.push(price)
    }
  }
  // console.log(expensive);

  expensive = prices.filter( price => price >= 20)
  // console.log(expensive);

// Reduce

  // coger muchas cosas y reducirla a una cosa
  // Manual
  let sum = 0
  for (price of expensive) {
    sum += price
  }
  // console.log(sum);

  // Con reduce
  sum = expensive.reduce( (acum, price) => acum += price )
  // console.log(sum);
  
  // De una
  sum = dollars
    .map( dollar => Number( dollar.slice(0, dollar.length - 1)) )
    .filter( price => price >= 20 )
    .reduce( (acum, price ) => acum += price)
  
  // console.log(sum);

  sum = 0
  for (const dollar of dollars) {
    const price = Number(dollar.slice(0, dollar.length - 1))
    if(price >= 20) sum += price
  }

  // console.log(sum);

  // let si = prices.map( price =>  ({ price, currency: '$'}))
  //   .forEach( ele => ele += 10)
