// Test if script is connected to index.html
console.log("fish");

function after3() {
    setTimeout(() => {
        console.log("After X seconds, read this!");
    }, 3000);
}

// after3();

// ###############################################

function wait() {
    console.log("Wait 3 seconds");
}

function anotherFunction() {
    wait();
    setTimeout(() => {
        let count = 11;
        const myFirstIntervall = setInterval(() => {
            count--;
            console.log(count);
            if (count === 9) {
                console.log("While waiting, you've lost 3 sec of your life time. Bravo to you!");
            } else if (count === 0) {
                clearInterval(myFirstIntervall);
            }
        }, 1000);
    });
}

// anotherFunction();

// ################################################

const output = document.querySelector(".zeit");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let count = 100;
    const timer = setInterval(() => {
        if (count === 0) {
            clearInterval(timer);
            output.innerHTML = "Timer off";
            setTimeout(() => {
                output.innerHTML = "100%";
            }, 3000);
        } else {
            count--;
            output.innerHTML = `${count}%`;
        }
    }, 10);
});

// ###################################################

// Hole dir die Informationen über den Browser wie folgt:  \- Browsername  \- Betriebssystem-Architektur  \- Browser-Version  \- Window Auflösung  \- Innenhöhe und -breite des Dokuments  \- colorDepth  \- pixelDepth
function myBrowserInfo() {
    console.log(navigator.appCodeName);
    console.log(navigator.appName);
    console.log(navigator.appVersion);
    console.log(navigator.battery);
    console.log(navigator.geolocation);
    console.log(navigator.language);
    console.log(navigator.userAgent);
    console.log(navigator.plugins);
    console.log(window.innerHeight);
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    console.log(window.innerWidth);
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(screen.pixelDepth);
    console.log(screen.colorDepth);
}

myBrowserInfo();

// ############################################################

const div = document.querySelector(".message");
const p = document.querySelector("p");
const count = document.querySelector("#count");

let xount = 10;
const timer3 = setInterval(() => {
    xount--;
    count.innerHTML = xount;
    if (xount === 0) {
        clearInterval(timer3);
        count.innerHTML = "";
        p.innerHTML = "";
        div.classList.remove("message");
    }
}, 1000);
