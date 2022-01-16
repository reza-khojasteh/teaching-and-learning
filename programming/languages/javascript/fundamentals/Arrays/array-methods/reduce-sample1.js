const items = [
  { id: 1, price: 399 },
  { id: 2, price: 199 },
  { id: 3, price: 299 },
];

console.log(items.reduce((acc, cur) => acc + cur, 0)); //WRONG! Printes: 0[object Object][object Object][object Object]

console.log(items.reduce((acc, cur) => acc + cur.price, 0)); // CORRECT! Prints: 897

console.log(items.reduce((acc, cur) => acc.price + cur.price)); //WRONG! Printes: NaN (it basically cannot read properties of undefined (reading 'price') and then adds undefined to a number which results in NaN)

console.log(items.reduce((acc, { price }) => acc + price, 0)); // CORRECT! Prints: 897
