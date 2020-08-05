const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let value = [];
  const quantity = [];
  for (const product of arr) {
    if (prop === 'name') {
      value.push(product.name);
    }
    if (prop === 'quantity') {
      value.push(product.quantity);
    }
    if (prop === 'category') {
      value.push(product.category);
    }
    if (value[0] === undefined) {
      value = [];
    }
  }
  return value;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
