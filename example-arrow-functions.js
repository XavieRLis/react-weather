// var names = ['Xavier', 'Margo', 'Andrew'];

// names.forEach(function(element) {
//   console.log('forEach', element);
// });
//
// names.forEach((element) => {
//   console.log('arrowfunc', element);
// });
//
//
// names.forEach((element) => console.log(element));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('XavieR'));


// var person = {
//   name: 'XavieR',
//   greet: function () {
//     names.forEach((element) => console.log(this.name + ' says hi to '+ element));
//   }
// }
//
// person.greet();


// Challenge area

function add (a, b) {
  return a+b;
}

//addStatement;
var addStatement = (a, b) => {
  return a+b;
};

//addExpresion
var addExpresion = (a, b) => a+b;

console.log(add(1,3));
console.log(addStatement(1,3));
console.log(addExpresion(1,3));
console.log(add(9,0));
console.log(addStatement(9,0));
console.log(addExpresion(9,0));
