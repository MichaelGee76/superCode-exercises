// ########################## Filter 1
const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];
// Short
const onlySix = woerter.filter((six) => six.length <= 6);
console.log(onlySix);
// Long
const onlySix2 = woerter.filter((sixxx) => {
    return sixxx.length <= 6;
});
console.log(onlySix2);

// ######################################
// ###################################### Filter 2

const heroes = ["Superman", "Batman", undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", null];

let noneHeroe1 = null;
let noneHeroes2 = undefined;

const myHeroes = heroes.filter((hero) => {
    // return heroes.includes(noneHeroe1) && heroes.includes(noneHeroes2); includes wirft fehler wegen null & undefined frag net warum!
    return hero; // filter() filtert null & undefined raus
});
console.log(myHeroes);

// #########################################################################

let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];

languages.sort(); // sortiert Strings! alphabetisch ohne arrow func

// console.log(languages);

function sortMe() {
    languages.sort();
    console.log(languages);
}

// sortMe();

// ########################################################################

function sortMeReverse() {
    languages.sort();
    languages.reverse();
    console.log(languages);
}

// sortMeReverse();

// ##############################################################

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

// sortiert aufsteigend
numArray1.sort((a, b) => a - b);
console.log(numArray1);
// sortiert absteigend
numArray1.sort((a, b) => b - a);
console.log(numArray1);

// ###############################################

const drinks = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];

const upperDrinks = drinks.map((drink) => drink.toUpperCase());
console.log(upperDrinks);

// ##############################################

let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

const num = array.map((i) => i * 2);
console.log(num);

num.sort((a, b) => a - b);
console.log(num);

// ##############################################

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
// celsius = (℉ - 32) / 1.8

function f2C(temp) {
    return temp.map((i) => (i - 32) / (1.8).toFixed());
}

console.log(f2C(fahrenheit));

// ############################################

let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];

const myDrinks = (list) => {
    list.sort();
    list.forEach((drink) => {
        console.log(drink);
        document.body.innerHTML += `${drink}<br>`;
    });
};

myDrinks(getraenke);

// ###############################################

let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

const check3 = checkNumber.map((num) => {
    if (num % 3 === 0) {
        return num + 100;
    } else {
        return num;
    }
});

console.log(check3);

// #############################################

let album = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"];

// const new array, con
const newAlbum = album.map((i) => {
    // no assignment to const
    // new var toLowerCase
    let n = i.toLowerCase();
    if (n.includes(".")) {
        // hier wird vorausgesetzt, dass die länge der dateiendung bekannt ist
        return n.slice(0, n.length - 4);
    } else {
        return (n = "invalid");
    }
});

console.log(newAlbum);

// Bessere Methode, da möglicherweise die länge der dateiänderung unbekannt ist lastIndexOf findet den Punkt!

const anotherAlbum = album.map((i) => {
    let newItem = i.toLowerCase();
    if (newItem.includes(".")) {
        return newItem.slice(0, newItem.indexOf("."));
    } else {
        return (newItem = "invalid");
    }
});

console.log(anotherAlbum);
