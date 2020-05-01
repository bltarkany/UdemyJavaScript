console.log("Hello World!!!");

// variables are a store piece of information that can be called upon multiple times

// 5 variables types: Number, String, Boolean, Undefined, null


// String is designated by ''
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
console.log(lastName);

// Number is always floating with decimal even when not specified
var age = 28;
console.log(age);

// Boolean is either true or false
var fullAge = true;
console.log(fullAge);

// Undefined is a variable with no value
// multiple variables can be declared at the same time and later defined
var job, isMarried;
console.log(job);

job = 'teacher';
isMarried = false;


// Null is a empty or non-existent value
var salary = null;
console.log(salary);


// Type Coercion -- javascript will convert the types of variables to display the full console log automatically
// type coercion will change this console into a string
console.log(firstName +' '+ lastName +' is '+ age +' years old. And he is a '+ job +'. Is he married? '+ isMarried); 


// console.log -- prints to console
// prompt -- prompts the user for an action
// alert -- alerts the user of an action

alert(firstName +' '+ lastName +' is '+ age +' years old. And he is a '+ job +'. Is he married? '+ isMarried);

// Type Mutation can happen when you call a variable and give it a new defining point
// prompts can be used to store information gathered from the user
lastName = prompt('What is his last name?');
console.log(firstName +' '+ lastName);


// Basic Operators

// global variables
var year = 2020;

// subtraction -
var yearBorn = year - age;
console.log(yearBorn);

// addition +
var inTwoYears = age + 2;
console.log('In two years John will be '+ inTwoYears +' years old.');

// multiplication *
// Note: double quotations are used to alleviate apostrophe conflict
var doubleAge = age * 2;
console.log("Double John's age is "+ doubleAge +'.');

// Division /
var halfAge = age / 2;
console.log("Half of John's age is "+ halfAge +'.');

// Comparison < >
var markAge = 40;
var older = age > markAge;
console.log('Is John older than Mark? '+ older);

// Typeof Operator -- defines the type of variable
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof older);
