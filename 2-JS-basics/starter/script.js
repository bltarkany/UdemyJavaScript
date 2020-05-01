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
console.log(firstName +' '+ lastName +' is '+ age +' years old. And he is a '+ job +'. Is he married? '+ isMarried); 