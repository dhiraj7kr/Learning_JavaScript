// -------------**********VARIABLE***************----------------

var myName = "Dhiraj Kumar";
console.log(myName);

var myName = "Dhiraj Kumar Tiwari"
console.log(myName)

let price1 = 25;
let price2 = 35;
let tax = (10 / 100) * (price1 + price2);
let totalCost = price1 + price2 + tax;

console.log(totalCost)


// -----------ONE STATEMENT MANY VARIABLE----------------

let carName = "Volvo", carOwnerName = "Dhiraj Kumar", carPrice = 2250000;

console.log(carName + "  " + carOwnerName + "  " + carPrice);

// ----------------STATIC VARIABLE-----------------

let companyName = "Acuvate";
let salary = 3;
let isFullTime = false;
let futureSalary = undefined;
let trueFriend = null;
let selecteColors = ['green', 'yellow', 'red', 1];

console.log(companyName + " datatype is " + typeof (companyName));
console.log(salary + " dataype is " + typeof (salary));
console.log("is Full time employee" + isFullTime + " dataype of this is " + typeof (isFullTime));
console.log("future salary " + futureSalary + "and dataType is " + typeof (futureSalary));
console.log(selecteColors);
console.log(typeof (selecteColors));

// ********************IMPORTANT****************************

console.log("True friend in company " + trueFriend + " Datatpe of this is " + typeof (trueFriend));


// -----------------DYNAMIC TYPING------------------

// ---------------------OBJET--------------------------

let personalDetail = {

    name: "Dhiraj Kumar",
    age: 22,
    address: "Jharkhand"
};

console.log(personalDetail);

// DOT NOTATION

personalDetail.age = 21;

console.log(personalDetail);
console.log(personalDetail.age);

//SQUARE NOTATION

personalDetail["age"] = 23;
console.log(personalDetail);
console.log(personalDetail.age);

// ------------------Array------------------

let selectedColors = ['white', 'pink', 'red', 100];

console.log(selectedColors);
console.log(typeof (selectedColors));

selectedColors[4] = "purple";
console.log(selectedColors);

selectedColors[8] = "purplesssssssssssss";
console.log(selectedColors);
console.log(selectedColors[2]);
console.log(selectedColors.length);


// -------------Function------------------

//function1

function greet(Name) {

    console.log("Hello " + Name);


}

greet('Dhiraj');

//function2

function greet1(Name, lastname) {

    console.log("Hello " + Name + " " + lastname);


}

greet1('Dhiraj');
greet1('Dhiraj', 'Kumar');

//calculation funcrion

function square(number) {

    return number * number; // return required otherwise output is undefined.
}

console.log(square(3));


// -----------------OPERATORS--------------------------

// --------------------arthmetic operator--------------------------

let x = 10;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);  // exponential

//increment &decrement

console.log(x); //10
console.log(x++); //show 10 but value will become 11
console.log(x); //show increds value
console.log(++x); // increase then show

//decrement

console.log(y);
console.log(--y);
console.log(y--);
console.log(y);


// ----------ASSIGNMENT OPERATION---------------


x = x + 5;
console.log(x);

x += 6;
console.log(x);

// -----------comparison operator-------------

let a = 3;
console.log(a > 4);
console.log(a > 2);
console.log(a >= 3);
console.log(a <= 4);
console.log(a >= 4);
console.log(a === 4);
console.log(a === 3);
console.log(a !== 4);
console.log("a" === 3); /// different Data type

// loose equality


console.log("a" == 3);
console.log("3" == 3);
console.log("3" == a);  // convert to string

console.log(true == 1);
console.log(true == 0);

//-----------ternary operation-----------

//if opoint greater then 100
//gold customer
//otherwise silver customer

let coins = 120;
let type = coins > 100 ? 'gold' : 'silver';

console.log("This customer is " + type);

//using function

function customerCheck(point) {
    let score = point > 100 ? 'gold' : 'silver';

    console.log("Customer belongs to " + score + " catogery");
}
customerCheck(200);


// ------------------------LOGICAL OPERATOR------------------

// ------------------Check eligible for loan--------------

let highIncome = true;
let goodCreditScore = true;

let eligible = highIncome && goodCreditScore;

console.log("Is eligible for lone: " + eligible);

//------------------logical operator with non boolean------------

//---------------------- Falsy and Truthy----------------------


//anything that is not falsy is truthly

//falsi example are:
//undefined
//null
// 0
//''
//false

//example in real life:

//e-commerce selling t-shirt.

let userColor = 'red';
let defaultColor = "blue";

let currentColor = userColor || defaultColor;

console.log(currentColor);

//-----if user does give any input--------------

let userColor1 = undefined;
let defaultColor1 = "blue";

let currentColor1 = userColor1 || defaultColor1;

console.log(currentColor1);
//

//***************************CONDITION**************************** */

//IF-ELSE

//if from 6am to 12 pm : good morning
//12pm to 6pm good afternoon.


let hours = 10;

if (hours >= 6 && hours < 12) {
    console.log("Good morning");

}
else if (hours >= 12 && hours < 18) {
    console.log("good Afternoon");
}
else {
    console.log("Out of service");
}

// If else using the function

function saymorning(number) {
    let hour = number;

    if (hour >= 6 && hour < 12) {
        console.log("Good morning");

    }
    else if (hour >= 12 && hour < 18) {
        console.log("good Afternoon");
    }
    else {
        console.log("Out of service");
    }
}
saymorning(14);

//************************LOOP********************************/

//******for-loop************/
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
//***********while loop******** */

let i = 0;
while (i <= 5) {
    console.log("while loop" + i);
    i++;
}
//**************Do-whle-----************ */

let j = 0;
do {
    console.log("do-while loop" + j);
    j++;

}
while (j <= 5);

//---------------FOR-I LOOP-----------------------------

let person = {

    name: "Dhiraj Kumar",
    age: 22,
    city: "hyderabad"

};
for (let key in person) {
    console.log(key + " : " + person[key]);  // key here
}

// for the Array of fruits

let fruits = ["Apple", "Mango", "Graps", "Water-melon", "pears"];

for (index in fruits) {

    console.log(index + " : " + fruits[index]);
}


//*************for-of loop********************* */

const colors = ['red', 'green', 'white'];
for (let color of colors)
    console.log(color);

//******************************************BREAK and Continue */

let k = 0;
while (k <= 10) {

    if (k === 5) {
        break;
    }
    console.log(k);
    k++;
}

//***************continue */
let l = 0;
while (l <= 10) {

    if (l % 2 === 0) {
        l++;
        continue;
    }
    console.log(l);
    l++;
}

//*****************MAX OF TWO NUMBER */
// let num1=25 , num2=25 ;

// if(num1>num2){
//     console.log(num1 + "is the greate");
// }
// else if (num2> num1){
//     console.log(num2 +" is Max of two number");
// }
// else  if (num1= num2){
//     console.log("both number are equal");
// }
// else {
//     console.log("Not Defined");
// }

// *********88888MAX OF TWO NUMBER USING FUCTION*****

// function maxOfTwoNumber (number1, number2){

//     let num1= number1 , num2= number2 ;
//     let result;
// if(num1>num2){
//     result = num1 + " is the greate";
// }
// else if (num2 > num1){
//     result = num2 +" is Max of two number";
// }
// else  if (num1= num2){
//     result ="both number are equal";
// }
// else {
//     result = "Not Defined";
// }
//     document.getElementById("maxof").value = result;

// }


//*************technique 2 */

function maxOfTwoNumberT2() {

    let numt1 = document.getElementById('t1').value, numt2 = document.getElementById('t2').value;
    let result2;

    if (numt1 > numt2) {
        //return numt1;
        result2 = numt1;
    } 
    else {
       // return numt2;
        result2 = numt2;
    }

    document.getElementById("maxoft2").value = result2;
}




//IF ELSE TO CHECK LANDSC

function isLandscape() {
    let height= Number(document.getElementById('height1').value);
    let width= Number(document.getElementById('weight1').value);
    let checkLandscope;
    if (height > width){
        checkLandscope= true;
        // console.log("This is not in Landscope");
                      }
     else if(height <= width ){
        checkLandscope = false;
        // console.log("This is not LandScope");

     }
     if(checkLandscope){
        document.getElementById('para').textContent = "This is not in Landscope";
     } else if (!checkLandscope) {
        document.getElementById('para').textContent = "This is a Landscope";
     }
     
}
// console.log("Landscape " + isLandscape(24, 11));
// console.log("Landscape " + isLandscape(24, 41));



//FIZZ bUZZ