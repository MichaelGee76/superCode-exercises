// console.log("fish");

// ######################
// geht so, mit event/target Beste Schreibweise bis jetzt ist die folgende
document.querySelector("div:first-of-type").addEventListener("click", (event) => {
    event.target.classList.toggle("card-color");
});
document.querySelector("div:nth-of-type(2)").addEventListener("click", (event) => {
    event.target.classList.toggle("card-color");
});
document.querySelector("div:nth-of-type(3)").addEventListener("click", (event) => {
    event.target.classList.toggle("card-color");
});

document.querySelector("div:nth-of-type(4)").addEventListener("click", (event) => {
    event.target.classList.toggle("card-color");
});
// oder auch so, wie schon bekannt. ist aber echt beschissen lesbar
document.querySelector("div:nth-of-type(5)").addEventListener("click", () => {
    document.querySelector("div:nth-of-type(5)").classList.toggle("card-color");
});

// #######################

document.querySelector("h1").addEventListener("click", () => {
    console.log("You clicked!");
});

// ##########################

const myBtn = document.querySelector("#clickMe");
// count muss außerhalb der Funktion dekl werden , da sonst variable bei jedem aufruf neu dekl wird
// ausserdem muss count of 1 sonst beginnt erster klck mit 0!
let count = 1;
myBtn.addEventListener("click", () => {
    myBtn.innerHTML = `Click me: ${count++}`;
});

// ! Alternative Schreibweise, hier wurde wieder nur die funktion ausgelagert
let count2 = 1;
const updateClicks = () => {
    myBtn.innerHTML = `Click me: ${count2++}`;
};

myBtn.addEventListener("click", updateClicks);

// ############################
const output = document.querySelector(".output");
const choice = document.querySelector("#choice");
choice.addEventListener("change", (event) => {
    output.innerHTML = `Sie haben ${event.target.value} gewählt`;
});

// #############################

// //holt den wert von option
const selectedC = document.querySelector("#chooseColor").selectedIndex;
// steuert das select an
const list = document.querySelector("#chooseColor");
// der Button
const btn = document.querySelector("#button");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    list.remove(selectedC);
});
// ! ######### Auch hier ist wieder eine Alternativschreibweise verewndet worden!
const selectVal = document.querySelector("#chooseColor").value;
const list2 = document.querySelector("#chooseColor");
const btn2 = document.querySelector("#button");
const btn3 = document.querySelector("#reset");
const removeAndPreventDefault = (event) => {
    event.preventDefault();
    list2.remove(selectVal);
};
// resetColorList lädt die seite neu, dadurch wird die Liste wieder gefüllt :)

const resetColorList = () => {
    location.reload();
};

btn2.addEventListener("click", removeAndPreventDefault);
btn3.addEventListener("click", resetColorList);
// ###############################
// holt den button
const body = document.querySelector("body");
//der EL sitzt auf den Farbpunkten und toggelt die Klasse
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

// ######################## im folgenden 3 verschiedene Schreibweisen der selben funktion
// ! 1.
// steuert den button an
const colorChangeButton = document.querySelector("#button1");

colorChangeButton.addEventListener("click", () => {
    // holt sich den aktuellen wert der liste
    const colorSelect = document.querySelector("#farbeAuswahlen").value;
    //schneidet leerzeichen aus dem obigen wert und setzt jenen als bg color für body
    document.body.style.backgroundColor = colorSelect.replace(" ", "");
});
// #########################
// ! 2.
function replaceWhiteSpace() {
    const colorSelect = document.querySelector("#farbeAuswahlen").value;
    document.body.style.backgroundColor = colorSelect.replace(/ /g, "");
}

colorChangeButton.addEventListener("click", replaceWhiteSpace);
// ######################
// ! 3.
const replWhite = () => {
    const colorSelect = document.querySelector("#farbeAuswahlen").value;
    document.body.style.backgroundColor = colorSelect.replace(/ /g, "");
};

colorChangeButton.addEventListener("click", replWhite);
// * Alle machen führen zum selben ergebnis.
