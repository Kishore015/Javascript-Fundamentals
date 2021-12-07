// variable declaration
 var person_firstletter = "K";
 var personName1 = "Kishore";
 personName1 = "Kumar";


 var x = 10;

 x = 30.99;


 console.log(person_firstletter);
 console.log(personName1);

//  ES6 variable declaration keywords
//  1. const
// 2. let


const num1 = 9;

// num1 = 10;

console.log(num1)


let num2 = 10;

num2 = 30.;

console.log(num2)



//  JS Data Types


/*
1. Number
2. String
3. Boolean
4. Undefined
5. null
*/

// let p = 10.99;

// p = 'k';

// p = "kishore";

// p = true;

let p; // {}

const num3 = 15; // number
const num4 = 15; //string


console.log(num3 > num4);

//  1. Arithmetic Operators (+, -, *, /, %)
//  2. Relational operators (==, ===, <, >, <=, >=)
//  3. Logical Operators (&&, !, ||)
console.log(typeof(p));


// conditional statements

/*
1. if
2. if-else
3.if else-if else
4. Nested if
*/
// 0 0 1




if (num3 > num4){
    console.log("num3 is greater than num4");
} else if (num3 == num4) {
    console.log("num3 is equal to num4")
} else {
    console.log("num3 is lessthan num4")
}



// Loops

// for, for-in, for-of, forEach
// while //
// do-while  //


let xyz = 30;
for (let i=0; i<=10; i++){
    console.log(i)
}

// Arrays
let names = ['kishore', 'kumar', 9, true, ]
// Objects
let companyEmployeeList = {
    id : 1,
    personName : 'Kishore',
    trainer : true,
    hobbies : ['music', 'cricket', 'nature']
}


//  Objects in array
let E_list = [
{},
{},
{}

];

console.log (names)
// console.log(obj)
// Functions

function compareNumbers(){
    // Block of code
}

compareNumbers();

// ES5
// Classes Before 2015 ES6 JS


const names_of_employee = []

console.log(names_of_employee[0])

// Array methods

// unshift()

names_of_employee.unshift("ramya", "balaji");

console.log(names_of_employee)

// push

names_of_employee.push("lavanya", "harish");

console.log(names_of_employee)

// shift

console.log(names_of_employee.shift())

console.log(names_of_employee)

// pop

console.log(names_of_employee.pop());

console.log(names_of_employee)

// sort
names_of_employee.sort();

// convert array into a string

console.log(names_of_employee.toString())


// Object

const employeeObject = {
    key : "value",
    id : 315,
    firstName : "Fazal",
    lastName : "Khan",
    designation : "Director"
}

console.log(employeeObject)

employeeObject.firstName = "Afzal"

console.log(employeeObject.firstName)

console.log(employeeObject.designation)

 const person = {
     firstName : "sai",
     lastName : "kumar",
     isCurrentlyEmployed : true
 }

 Object.freeze(person)

 console.log(Object.isFrozen(employeeObject))

 person.firstName = "kishore";

 console.log(person)


//  Access object values

const keys = Object.keys(person);

const values = Object.values(person)

console.log(keys)

console.log(values)

// Functions

function addNumbers(x,y){
    return x+y;
}
console.log(addNumbers(10,12))


const age = prompt("Enter  your age")

function ageChecker(){
    let result = 0;
    if(age>18){
        console.log("you are a major")
    }else{
        console.log("You are a minor")
    }
}
console.log(ageChecker());

// Arrow function
const sub_Numbers = () => alert("Hi ");
console.log(sub_Numbers(12,12));

// Print javascript for 100  times on a webpage

// to check whether a string is palindrome or not





