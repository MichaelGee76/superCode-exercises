// function adult() {
//     const usrAge = document.querySelector("input:first-of-type").value;
//     const checked = document.querySelector("h3");
//     if (usrAge >= 18) {
//         checked.innerHTML = "adult!";
//     } else {
//         checked.innerHTML = "juvenile";
//     }
// }

// function shisha() {
//     const heading = document.querySelector("h3:nth-of-type(1)");
// console.log(heading);
//     const smokePermission = document.querySelector(
//         "input:nth-of-type(1)"
//     ).value;
//     console.log(smokePermission);
//     if (smokePermission >= 18) {
//         heading.innerHTML = "Piff Paff Puff";
//     } else {
//         heading.innerHTML = "No Cigarette smokin in my room";
//     }
// }

function airPollFunc() {
    let rangeSlider = document.querySelector("#range").value;
    //console.log(rangeSlider);
    const bgColorDiv = document.querySelector("body");
    const heading = document.querySelector("h2");
    if (rangeSlider <= 50) {
        bgColorDiv.style.backgroundColor = "green";
        // hier wäre heading.textContent die bessere Wahl, da innerHTML u.U. zu Problemen führen könnte(in Loops zumBeispiel)
        heading.innerHTML =
            "Air pollution " +
            rangeSlider +
            "!" +
            " Perfect, take a deep breath!";
    } else if (rangeSlider > 50 && rangeSlider <= 100) {
        bgColorDiv.style.backgroundColor = "orange";
        heading.innerHTML =
            "Air Pollution " +
            rangeSlider +
            "!" +
            " Still good air quality, but be carefull";
    } else if (rangeSlider > 100 && rangeSlider <= 150) {
        bgColorDiv.style.backgroundColor = "red";
        heading.innerHTML =
            "Air Pollution " + rangeSlider + "!" + " Hazard to your health";
    } else {
        alert("Keine Daten erhalten. Messung abgebrochen!");
    }
}

// function diff(num) {
//     const fixedNum = 27;
//     result = num - fixedNum;

//     if (num > 27) {
//         console.log(result * 2);
//     } else {
//         console.log(result);
//     }
// }

// diff(123);

// function add(num1, num2) {
//     result = num1 + num2;
//     if (num1 === num2) {
//         console.log(result * 5);
//     } else {
//         console.log(result);
//     }
// }

// add(5, 5);
