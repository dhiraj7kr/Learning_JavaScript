// Call Stack
function first() {
    second();
}

function second() {
    console.log("This is the second function.");
}

first(); // Call stack: first() -> second()

// Primitive Types
let number = 42; // number
let string = "Hello, World!"; // string
let boolean = true; // boolean
let undefinedVar; // undefined
let nullVar = null; // null
let symbolVar = Symbol('sym'); // symbol
let bigintVar = BigInt(12345678901234567890); // bigint

// Value Types and Reference Types
let valueType = 5; // value type (number)
let referenceType = { name: "John" }; // reference type (object)
referenceType.age = 30; // modifying reference type

// Implicit, Explicit, Nominal, Structuring and Duck Typing
let implicitConversion = "5" + 5; // "55"
let explicitConversion = Number("5") + 5; // 10

// == vs === vs typeof
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(typeof 5); // "number"

// Function Scope, Block Scope and Lexical Scope
function scopeTest() {
    var functionScoped = "I'm function scoped"; // function scope
    if (true) {
        let blockScoped = "I'm block scoped"; // block scope
        console.log(blockScoped);
    }
    console.log(functionScoped);
}

scopeTest();

// Expression vs Statement
let x = 5; // statement
let y = x + 10; // expression

// IIFE, Modules and Namespaces
(function() {
    console.log("I am an IIFE!");
})(); // Immediately Invoked Function Expression

// Message Queue and Event Loop (this is a conceptual demonstration)
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
// The output will be: Start, End, Timeout

// setTimeout, setInterval and requestAnimationFrame
setTimeout(() => console.log("Executed after 1 second"), 1000); // Executes once after 1 second
setInterval(() => console.log("Executed every 2 seconds"), 2000); // Executes every 2 seconds

// JavaScript Engines
// This is a conceptual section; no specific code here.
// Major engines include V8 (Chrome, Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari).

// Bitwise Operators, Type Arrays and Array Buffers
let bitwiseAnd = 5 & 3; // 1 (binary 0101 & 0011)
let buffer = new ArrayBuffer(16); // creates a buffer of 16 bytes
let typedArray = new Uint8Array(buffer); // typed array based on the buffer

// DOM and Layout Trees
document.body.innerHTML = "<h1>Hello, DOM!</h1>"; // Manipulating the DOM

// Factories and Classes
function Car(make, model) {
    return {
        make,
        model,
        drive() {
            console.log(`Driving a ${this.make} ${this.model}`);
        }
    };
}

let myCar = Car('Toyota', 'Corolla');
myCar.drive(); // Driving a Toyota Corolla

// this, call, apply and bind
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is Alice
const greet = person.greet.bind(person);
greet(); // Hello, my name is Alice

// new, Constructor, instanceof and Instances
function Dog(name) {
    this.name = name;
}

const myDog = new Dog('Rex');
console.log(myDog instanceof Dog); // true

// Prototype Inheritance and Prototype Chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Dog');
dog.speak(); // Dog makes a noise.

// Object.create and Object.assign
const parent = { name: "Parent" };
const child = Object.create(parent);
console.log(child.name); // undefined (but child inherits from parent)

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }

// map, reduce, filter
const nums = [1, 2, 3, 4];
const squares = nums.map(n => n * n); // [1, 4, 9, 16]
const sum = nums.reduce((acc, n) => acc + n, 0); // 10
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// Pure Functions, Side Effects, State Mutation and Event Propagation
function pureFunction(x) {
    return x + 1; // pure function, no side effects
}

let state = { count: 0 };
function increment() {
    state.count++; // state mutation
}

// Closures
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const closureFunc = outer();
closureFunc(); // 1
closureFunc(); // 2

// High Order Functions
function highOrderFunction(func) {
    return function(x) {
        return func(x) + 1;
    };
}

const incrementFunc = highOrderFunction(x => x);
console.log(incrementFunc(5)); // 6

// Recursion
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Collections and Generators
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
});

promise.then(result => console.log(result)); // Promise resolved!

// async/await
async function asyncFunction() {
    const result = await promise;
    console.log(result);
}

asyncFunction(); // Promise resolved!

// Data Structures
let stack = []; // Simple stack implementation
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// Expensive Operation and Big O Notation
// Example: O(n) for linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// Algorithms
// Quick sort algorithm implementation
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // Sorted array

// Inheritance, Polymorphism and Code Reuse
class AnimalClass {
    speak() {
        console.log("Animal speaks");
    }
}

class DogClass extends AnimalClass {
    speak() {
        console.log("Woof!");
    }
}

const dogInstance = new DogClass();
dogInstance.speak(); // Woof!

// Design Patterns
// Example: Module pattern
const modulePattern = (function() {
    let privateVar = 0;

    return {
        increment: function() {
            privateVar++;
            console.log(privateVar);
        }
    };
})();

modulePattern.increment(); // 1
modulePattern.increment(); // 2

// Partial Applications, Currying, Compose and Pipe
const add = (a) => (b) => a + b;
const addFive = add(5);
console.log(addFive(10)); // 15

// Clean Code
// Example: Meaningful naming and function composition
function getUserData(userId) {
    // Fetch user data from API
}

// Call the function with meaningful context
getUserData(123);
