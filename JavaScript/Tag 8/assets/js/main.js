// let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

// const roundIt = (num) => {
//     return Math.round(num);
// };

// console.log(roundIt(193.4464));

// ###########################################################

// const randNum = Math.random(); // random number

// console.log(randNum);

// const randNum10 = Math.floor(Math.random() * 10) + 1; // random Number between 1 - 10
// console.log(randNum10);

// const randNum100 = Math.floor(Math.random() * 100 + 1); // random Number between 1-100
// console.log(randNum100);
// // For Loop zum testen von random zahl 100
// count = 200;

// for (let i = 0; i < count; i++) {
//     const randNum100 = Math.floor(Math.random() * 100 + 1); // random Number between 1-100
//     console.log(randNum100);
// }

// #############################

// let numArray = [
//     393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409,
//     427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475,
//     426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202,
//     264, 204, 447, 488,
// ];

// console.log(numArray);
// // Hier wird der Spread Operator verwendet ...
// const highest = Math.max(...numArray);
// console.log(highest);

// const lowest = Math.min(...numArray);
// console.log(lowest);

// ###############

// Number Guessing

// const usrAnswr = Number(prompt("Guess a number between 0-10: "));
// // console.log(typeof usrAnswr);9

// const randNum10 = Math.floor(Math.random() * 10);

// if (usrAnswr == randNum10) {
//     console.log(
//         `Woohoo, lucky punch man. You guessed right! The number is ${randNum10}`
//     );
// } else {
//     console.log(`The number was ${randNum10} You loose.`);
// }

// ###################### MWST APP ############################
// Button von-zu
const mwstBtn = document.querySelector('input[type="radio"]:checked').value;
console.log(mwstBtn);

function mwstCalc() {
    // console.log(mwstBtn);
    //Button 19 o. 7
    const mwstSatzBtn = document.querySelector(
        'input[name="mwst"]:checked'
    ).value;
    // console.log(mwstSatzBtn);

    // Input field
    const betrag = Number(document.querySelector("input[id='amount']").value);
    //console.log(betrag);

    // Output

    let mwstOutput = document.querySelector(".mwst-betrag p");
    let endbetrag = document.querySelector(".endbetrag p");

    // ##################

    // Error Messages
    const error1 = "Hier stimmt was nicht!";
    // // sorgt dafür dass der betrag nicht auf 0€ gesetzt wird!
    if (betrag === 0) {
        return;
    }

    if (mwstBtn === "netto2brutto" && mwstSatzBtn === "7") {
        console.log({ mwstBtn });

        mwstOutput.textContent = "€ " + (betrag * 1.07 - betrag).toFixed(2);
        endbetrag.textContent = "€ " + (betrag * 1.07).toFixed(2);
    } else if (mwstBtn === "netto2brutto" && mwstSatzBtn === "19") {
        console.log({ mwstBtn });

        mwstOutput.textContent = "€ " + (betrag * 1.19 - betrag).toFixed(2);
        endbetrag.textContent = "€ " + (betrag * 1.19).toFixed(2);
    } else if (mwstBtn === "brutto2netto" && mwstSatzBtn === "7") {
        console.log({ mwstBtn });

        mwstOutput.textContent = "€ " + (betrag - betrag / 1.07).toFixed(2);
        endbetrag.textContent = "€ " + (betrag / 1.07).toFixed(2);
    } else if (mwstBtn === "brutto2netto" && mwstSatzBtn === "19") {
        console.log({ mwstBtn });

        mwstOutput.textContent = "€ " + (betrag - betrag / 1.19).toFixed(2);
        endbetrag.textContent = "€ " + (betrag / 1.19).toFixed(2);
    } else {
        alert(error1);
    }
}

// Brutto Netto Ausgabe Funktion

// function changeTxt() {
//     console.log("fishmen");

//     const outputTextInput = document.querySelector("label[id='outputText']");
//     // console.log(outputTextInput);

//     const outputTextErgebnis = document.querySelector(".endbetragBruttoNetto");
//     // console.log(ouputTextErgebnis);

//     const text1 = "Nettopreis in Euro";
//     const text2 = "Bruttopreis in Euro";
//     const text3 = "Bruttoendbetrag in Euro";
//     const text4 = "Nettoendbetrag in Euro";

//     if (mwstBtn === "netto2brutto") {
//         // console.log("1");
//         outputTextInput.innerHTML = " ";
//         outputTextErgebnis.innerHTML = " ";

//         outputTextInput.innerHTML = text1;
//         outputTextErgebnis.textContent = text4;
//     } else if (mwstBtn === "brutto2netto") {
//         // console.log(2);
//         outputTextInput.innerHTML = "";
//         outputTextErgebnis.innerHTML = "";
//         outputTextInput.textContent = text2;
//         outputTextErgebnis.textContent = text3;
//     }
// }
