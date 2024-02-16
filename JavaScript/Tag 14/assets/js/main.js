// Test if script is connected to index.html
// console.log("fish");

const button = document.querySelector("button").addEventListener("click", () => {
    const list = document.querySelectorAll(".example");
    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle("other");
    }
});

// #################################################

const heading = document.querySelector("h1");
// console.log(document.body.getElementsByTagName("li")[0].textContent);

const button1 = document.querySelector("button:first-of-type").addEventListener("click", () => {
    heading.innerHTML = `${document.body.getElementsByTagName("li")[0].textContent}`;
});

const button2 = document.querySelector("button:nth-of-type(2)").addEventListener("click", () => {
    heading.innerHTML = `${document.body.getElementsByTagName("li")[6].textContent}`;
});

const button3 = document.querySelector("button:nth-of-type(3)").addEventListener("click", () => {
    heading.innerHTML = `${document.body.children[0].firstElementChild.nextElementSibling.textContent}`;
});

const button4 = document.querySelector("button:nth-of-type(4)").addEventListener("click", () => {
    heading.innerHTML = `${document.body.children[0].lastElementChild.previousElementSibling.textContent}`;
});

// ##################################################

function randNum() {
    let ranNum = Math.floor(Math.random() * data.length);
    return ranNum;
}

const container = document.querySelector(".imageContainer");
const buttonImage = document.querySelector(".random").addEventListener("click", () => {
    container.innerHTML = `<img src="${data[randNum()].download_url}">`;
});

// ###################################################

const pushListBtn = document.getElementById("enter");
const shoppingList = [];
pushListBtn.addEventListener("click", () => {
    const input = document.getElementById("userinput").value;
    const list = document.body.children[6].lastElementChild;
    const li = document.createElement("li");
    shoppingList.push(input);
    li.innerHTML = input;
    list.appendChild(li);
    console.log(shoppingList);
});
