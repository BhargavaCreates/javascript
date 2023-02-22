let userDetails = {
  name: 'Aman Bhargava',
  age: 23,
  profession: 'Dream Engineer',
  printDetails: function (workingState, workingCountry) {
    console.log(
      this.name,
      ' ',
      this.age,
      ' ',
      this.profession,
      ' ',
      '@',
      workingState,
      ' ',
      workingCountry
    );
  },
};

let user2Details = {
  name: 'Anupriya Jha',
  age: 22,
  profession: 'Software Engineer',
};

userDetails.printDetails('East London', 'United Kingdoms');

// to borrow printName fuction from userDetails Object we need to use Call() function;
console.log('--- using call() ---');
userDetails.printDetails.call(user2Details, 'Delhi', 'India');

// now Apply() function does the similar job, but the only difference is that we pass additional Arguments in an array

console.log(
  '--- using apply() - it is used to invoke functions with a given this value and arguments in array format. ---'
);
userDetails.printDetails.apply(user2Details, ['Delhi', 'India']);

// -- Apply() could also be used to concatanate 2 Arrays, or to copy values of one array into the other.

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

arr1.push.apply(arr1, arr2);

console.log(arr1);

console.log(
  '--- using bind(): it is similar to call but it instead of running the function directly it takes a copy of it which later could be invoked ---'
);

let printUser2Details = userDetails.printDetails.bind(
  user2Details,
  'Delhi',
  'India'
);

printUser2Details();

// now let us take a usecase where you wish to printuser2details after 2 seconds
// setTimeout(userDetails.printDetails("Delhi", "India"), 2000) // undefined error because in this case this refers to the globar object
// so to fix it .. we make a copy of the function using bind ... which lets us define the this  and then pass that copy in the settimeout funcitons as a call back.

setTimeout(printUser2Details, 2000);
