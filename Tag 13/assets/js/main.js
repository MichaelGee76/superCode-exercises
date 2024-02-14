// console.log("fish");

// ######################
// geht so, mit event/target Beste Schreibweise bis jetzt ist die folgende
// document.querySelector("div:first-of-type").addEventListener("click", () => {
//     e.target.classList.toggle("card-color");
// });
// document.querySelector("div:nth-of-type(2)").addEventListener("click", () => {
//     e.target.classList.toggle("card-color");
// });
// document.querySelector("div:nth-of-type(3)").addEventListener("click", () => {
//     e.target.classList.toggle("card-color");
// });
// // geht auch mit übergabe von event, muss aber nicht sein. deshalb oben besser
// document.querySelector("div:nth-of-type(4)").addEventListener("click", (event) => {
//     event.target.classList.toggle("card-color");
// });
// // oder auch so, wie schon bekannt. ist aber echt beschissen lesbar
// document.querySelector("div:nth-of-type(5)").addEventListener("click", () => {
//     document.querySelector("div:nth-of-type(5)").classList.toggle("card-color");
// });

// #######################

// document.querySelector("h1").addEventListener("click", () => {
//     console.log("You clicked!");
// });

// ##########################

// const myBtn = document.querySelector("#clickMe");
// // count muss außerhalb der Funktione dekl werden , da sonst variable bei jedem aufruf neu dekl wird
// // ausserdem muss count of 1 sonst beginnt erster klck mit 0!
// let count = 1;
// myBtn.addEventListener("click", () => {
//     myBtn.innerHTML = `Click me: ${count++}`;
// });

// ############################
// const output = document.querySelector(".output");
// const choice = document.querySelector("#choice");
// choice.addEventListener("change", (event) => {
//     output.innerHTML = `Sie haben ${event.target.value} gewählt`;
// });

// #############################

//holt den wert von option
const selectedC = document.querySelector("#chooseColor").selectedIndex;
// steuert das select an
const list = document.querySelector("#chooseColor");
// der Button
const btn = document.querySelector("#button");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    list.remove(selectedC);
});

// ###############################

const body = document.querySelector("body");

document.querySelector("#gray").addEventListener("click", () => {
    body.classList.toggle("grayBg");
});

document.querySelector("#white").addEventListener("click", () => {
    body.classList.toggle("whiteBg");
});

document.querySelector("#blue").addEventListener("click", () => {
    body.classList.toggle("blueBg");
});

document.querySelector("#yellow").addEventListener("click", () => {
    body.classList.toggle("yellowBg");
});

// #################################

const colorChangeButton = document.querySelector("#button1");

colorChangeButton.addEventListener("click", () => {
    const colorSelect = document.querySelector("#farbeAuswahlen").value;
    document.body.style.backgroundColor = colorSelect.replace(" ", "");
});
