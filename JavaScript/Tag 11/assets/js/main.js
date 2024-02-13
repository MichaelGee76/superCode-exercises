// Test if script is connected to index.html
// console.log("fish");
// for (let i = 1; i <= 10; i++) {
//     console.log(`Hello World Nummer ${i}`);
// }
// ##############################################
// let arr = [];
// for (let i = 0; i <= 10; i++) {
//     arr.push(i);
// }

// console.log(arr);
// ##############################################

// const arrNm = ["Jonathan", "Felix", "Jana", "Isabella", "Renate", "Adlatus", "Rhino", "Furkan", "Nick"];
// console.log(arrNm);

// for (let i = 0; i < arrNm.length; i++) {
//     console.log(arrNm[i]);
// }

// ###############################################

// function imageArray() {
//     returnArray = [];

//     for (let i = 0; i <= 100; i++) {
//         if (i < 0 && i < 10) {
//             returnArray.push(`image_00${1}.jpg`);
//         } else if (i > 10 && i < 100) {
//             returnArray.push(`image_0${i}.jpg`);
//         } else {
//             returnArray.push(`image_${i}.jpg`);
//         }
//     }

//     return returnArray;
// }

// console.table(imageArray());

// #################################################

// function loopiLoop() {
//     const input = Number(document.querySelector("#input").value);
//     let output = document.querySelector("h2");

//     if (input.length === 0) {
//         output.textContent = "Input not valid.";
//     } else {
//         // output.textContent = "";
//         let loop = "";
//         for (let i = 0; i < input; i++) {
//             loop += "o";
//         }
//         output.innerHTML = `L${loop}p`;
//     }
// }

// ##################################################

// for (let i = 0; i <= 5; i++) {
//     for (let x = 0; x <= 5; x++) {
//         console.table(`Äussere Schleife ${i}, Innere Schleife ${x}`);
//     }
//     console.log("Äussere Schleife beendet");
// }

// function randNumGen() {
//     let ran = Math.floor(Math.random() * 100);
//     return ran;
// }
// const arrNum = [];
// function ranNumArrayGen(n, arr) {
//     for (let i = 0; i < n; i++) {
//         arr.push(randNumGen());
//     }
// }

// const newArray = [];
// ranNumArrayGen(10, newArray);
// console.log(arrNum);

// ###################################################

// console.log(newArray);

// ###################################################

// let numArr = [5, 22, 15, 100, 55];
// const outputParagraph = document.querySelector("p");

// for (let i = 0; i < numArr.length; i++) {
//     for (let j = 2; j < numArr[i]; j++) {
//         if (numArr[i] % j === 0) {
//             outputParagraph.innerHTML += `${numArr[i]} is devidable by ${j}. The result is ${j} <br>`;
//         }
//     }
// }

//####################################################

function loopiLoop() {
    const input = Number(document.querySelector("#input").value);
    let output = document.querySelector("h2");
    let loop = "";
    if (input === 0) {
        output.textContent = "Input not valid.";
        return;
    } else {
        if (input % 2 === 0) {
            output.textContent = "";

            for (let i = 0; i < input; i++) {
                loop += "o";
            }
            output.innerHTML = `L${loop}p`;
        } else {
            for (let i = 0; i < input; i++) {
                if (i % 2 > 0) {
                    loop += "O";
                } else {
                    loop += "o";
                }
            }
            output.innerHTML = `L${loop}p`;
        }
    }
}
