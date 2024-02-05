// console.log("fish");

// const firstName = "Michael";
// const lastName = "Bold";

// console.log(firstName.length);
// const fullName = firstName + lastName;
// console.log(fullName.length);

// ########################################

// const txt = "Sam is good at codingschool";
// const paragragph = document.querySelector("p");
// paragragph.innerHTML = txt.replace("good", "bad");
// paragragph.innerHTML += " " + txt.replace("codingschool", "school");
// paragragph.innerHTML += " " + txt.replace("codingschool", "tennis");

// #############################################

// const txt = "Sam is going to school";

// const part1 = txt.slice(0, 4);
// console.log(part1);

// const part2 = txt.slice(4, 15);
// console.log(part2);

// const part3 = txt.slice(-7);
// console.log(part3);

// let newTxt = part1.toUpperCase() + part2 + part3.toUpperCase();
// newTxt = part1 + part2.toUpperCase() + part3;
// newTxt = console.log(newTxt);
// const w1 = txt.slice(0, 4);
// const w2 = txt.slice(4, 7);
// const w3 = txt.slice(7, 13);
// const w4 = txt.slice(13, 15);
// const w5 = txt.slice(-7);
// console.log(w5);

// const capitalWord1 = w1.charAt(0).toUpperCase() + w1.slice(1);
// const capitalWord2 = w2.charAt(0).toUpperCase() + w2.slice(1);
// const capitalWord3 = w3.charAt(0).toUpperCase() + w3.slice(1);
// const capitalWord4 = w4.charAt(0).toUpperCase() + w4.slice(1);
// const capitalWord5 = w5.charAt(0).toUpperCase() + w5.slice(1);

// const capitalSentence =
//     capitalWord1 + capitalWord2 + capitalWord3 + capitalWord4 + capitalWord5;

// console.log(capitalSentence);

// ##################################################

function change() {
    const searchInput = document.querySelector("#search-input").value;
    console.log(searchInput);
    const text = document.querySelector("article").innerText;
    if (text.includes(searchInput)) {
        console.log("found!");
        document.querySelector("article").innerHTML = text.replaceAll(
            searchInput,
            `<span class ="hot">${searchInput}</span>`
        );
    } else {
        alert("Word not found");
    }
}

// #####################################################

const myFunc = (num) => {
    let result = num * 2;
    return result;
};

console.log(myFunc(4));
// Erste Funktion

const myAge = (yearOfBirth) => {
    let currentYear = 2024;
    return currentYear - yearOfBirth;
};

function myAge(yearOfBirth) {
    let currentYear = 2024;
    return currentYear - yearOfBirth;
}

console.log(myAge(1976));

const ourAge = (myYear, yourYear) => {
    if (myYear > yourYear) {
        return myYear - yourYear;
    } else if (myYear < yourYear) {
        return yourYear - myYear;
    } else {
        return "You are at the same age!";
    }
};
