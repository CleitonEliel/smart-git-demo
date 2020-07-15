const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã","abacate", "abacaxi"];

const squareArr = arr.map(function(item) {
    return item * item;
});

const fruitposition = cesta.map(function (item, index){
  return `A/O ${item} está na posição ${index} do array`;
});

// squareArr = []
// squareArr = [1]
// squareArr = [1, 4]
// squareArr = [1, 4, 9]
// squareArr = [1, 4, 9, 16]

// console.log(squareArr);
// console.log(fruitPosition);

const sum = arr.reduce(function (total,next){
  console.log("total", total);
  console.log("next", next);
  return total + next;
});

// console.log(sum);

const filter = arr.filter(function (item) {
  return item === "banana";
})

// console.log(filter);
// console.log(filter2);

const find = arr.find(function (item) {
  return item === 4
})

const fruta = cesta.find(function (item) {
  return item === "abacate";
})

console.log(find);
console.log(fruta);