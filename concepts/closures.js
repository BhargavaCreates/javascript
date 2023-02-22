// Lexical Scoping : defines the scope of the variable as per the position it is declared in the source code.
// according to it, the scopes could be nested and the inner scope does have the access to the variables declared in the outter scope.

// *Note: Fuctions in JS are first class citizens, which means that they can be stored in a variable,
// can be passed as an argument to another function, can also be returned by a function.

// MOST SIMPLE DEFINITION OF CLOSURE WOULD BE: A Closure is a function that preserves the outer scope in its inner scope.

// For Example:

function Greeting() {
  let message = 'Hi';

  function sayHi() {
    console.log(message);
  }

  return sayHi;
}

let hi = Greeting();

hi();

// So in the above example when Greeting Function returned the `sayHi` function
// it returned the function with the outter scope variable `message`.

// * Intresting fact : normally,  the local variable only exist during the execution of the function.
// in our case we did execute the whole functtion on line no 21, so the variable messsage should have been vanished,
// this is the magic of closure, so technically the funciton `sayHi` was a closure function.

// so again the most simple def would be that: A closure is a function that preserves the outter scope in its inner scope.

// Another Example

// here we have a factory function
function greeting(message) {
  return function (name) {
    console.log(message, name);
  };
}

let sayHi = greeting('Hi'); // sayHi is a closure function as it is preserving the outer scope variable `message` which was 'Hi'.
let sayHello = greeting('Hello'); // similarly sayHello is also a clousure function.

sayHi('Aman');
sayHello('Aman');

// Intresting problem: using var to declare `index`

for (var index = 1; index <= 3; index++) {
  setTimeout(function () {
    console.log(
      'after ' + index + ' second(s):' + index,
      'using var to declare index'
    );
  }, index * 1000);
}

// what do you expect the output to be? Running after: 1 seconds: 1 and so on right?
// well no the output turns out to be: below
//`after 4 second(s):4
// after 4 second(s):4
// after 4 second(s):4
// Reason being: That the callback passed to the setTimeout turns out to be a closure(preserving value from outter scope)
// which remembers the value of "index" variable which was update to 4 on 4th loop iteration and since it is declared with var => becomes global

// to fix this, we could either use  => IIFE or `let`

// using let,since let creates a new lexical scope on iteration for `index` variable,
//  hence the callback closure functoin has to refer to this new scoped variable every time.

// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log(
//       'after ' + index + ' second(s):' + index,
//       'using let to declare index'
//     );
//   }, index * 1000);
// }

// another soluton is IIFE(immediately invoked function expression)
// they invoke a new scope for immediate execution of the function.

// for (var index = 1; index <= 3; index++) {
//   (function (index) {
//     setTimeout(function () {
//       // not passing index as argument in this function as it would again become closure, instead iife's index.
//       console.log('after ' + index + ' second(s):' + index);
//     }, index * 1000);
//   })(index);
// }

// Summary
// Lexical scoping describes how the JavaScript engine uses the location of the variable in the code to determine where that variable is available.
// A closure is a combination of a function and its ability to remember variables in the outer scope.
