// This is a single line JavaScript comment
document.write("I have comments in my JavaScript code!");
//document.write("You can't see this!");
//-->

document.write("I have multi-line comments!");
/*document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");
document.write("You can't see this!");*/

// 2. Übung

// 1. Beispiel

let a = 12;
let b = a * 3;
console.log(b);

console.log("Hello World");
let firstName = "Anton";
let age = 28;
let job = "Trainer";
let married = true;

console.log(
    `${firstName} is ${age} old, and his profession is ${job}. Verheiratet: ${married}`
);

// 3. Übung

let helloworld = "Hello World";
const pi = 3.14;
const burjdubai = 828;
const fullName = "Jan Schmidt";
const eifelTower = 324;
let camelcase = "camelCase";
let kursstatus = true;

// 4. Übung

// let x = 34;
// x = 67;
// console.log(x);
// const y = 34;
// y = 67;

// ! Arythmetik

let x = 20;
let y = 30;
let z = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log((x * y) / z);

let d = 15;
let k = 9;
console.log(d % k);

d++;
k++;

// Dom document.write

document.write("<h1>Hello World</h1> <p>Have a nice day</p>");
let myText = "Hello again";
document.write(myText);

let vorname = "Super";
let nachname = "Coder";

document.write("Hi, ich bin " + vorname + nachname);

// ! Output

// window.alert("Hallo Ihr Pfeifen");

// let usrAnswer = window.prompt("Bitte geben Sie ihren Namen ein!");

// window.prompt("Bitte geben Sie Ihren Namen ein", "Blaysholder");

// window.confirm("Stimmen Sie der Meinung zu?");

// let ageNew = window.prompt("Geben deine Alter bitte");

let man = "Rob Wad ist große Kollege";
let height = "2.72m";

window.confirm(man + " " + height);
