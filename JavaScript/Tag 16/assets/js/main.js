// Test if script is connected to index.html
console.log("fish");
const btnDate = document.querySelector(".getDate");
const output = document.querySelector(".outputDate");

btnDate.addEventListener("click", () => {
    let today = new Date();
    console.log(today);

    let day = today.getDate();
    console.log(day);

    let month = today.getMonth();
    let year = today.getFullYear();

    output.innerHTML = `
    
  <div>
  <h2>Today is the ${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month + 1}.${year}</h2>
  <p>It's a nice day. Go out and have some fun!</p>
  <h3>In other words, today's date is ${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month + 1}/${year}</h3>
  </div>
  `;
});

// #############################################################################

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

console.log(date1, date2, date3, date4);

// #############################################################################

let monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

let wochenTag = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const output1_2 = document.querySelector(".output1_2");
let today2 = new Date();
let year = today2.getFullYear();
let month = today2.getMonth();
month = monate[month];
let day = today2.toLocaleString("default", { weekday: "long" });
let hour = today2.getHours();
let minute = today2.getMinutes();
let second = today2.getSeconds();
output1_2.innerHTML = `
<h1>${today2}</h1>
 <p>${year} Year</p>
<p>${month}  Month</p>
<p>${hour}  Hour</p>
<p>${minute}  Minute</p>
<p>${second}  Second</p>
`;
// ###############################################################################
// new Date(1993, 3, 10, 16, 12, 13);
const output1_3 = document.querySelector(".output1_3");
let date5 = new Date(2222, 5, 20, 15, 42, 38);
let date6 = new Date(2123, 1, 24, 15, 42, 38);
let date7 = new Date(2123, 2, 24, 15.42, 38);

output1_3.innerHTML = `
<div>
<h3>${date5}</h3>
<h3>${date6}</h3>
<h3>${date7}</h3>
</div>
`;

// ###############################################################################

function getDaysOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysOfMonth(2016, 1));
console.log(getDaysOfMonth(2016, 2));
console.log(getDaysOfMonth(2017, 2));
console.log(getDaysOfMonth(2017, 12));

// ###############################################################################

function isWeekend(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    let weekDay = myDate.toLocaleString("default", { weekday: "narrow" });
    return weekDay === "S" ? console.log("Weekend, yeah") : console.log("Fuc... I gotta work");
}

isWeekend(2024, 2, 16);

// ###############################################################################

function getAmOPm(year, month, day, hour) {
    let hourx = new Date(year, month - 1, day, hour);
    console.log(hourx);
    hour >= 12 ? console.log("PM") : console.log("AM");
}

getAmOPm(2024, 1, 19, 15);

// #####################################################################################

let list = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function getMyMonth(date) {
    let now = new Date(date);
    let monthNum = now.getMonth();
    console.log(monthNum);
    return list[monthNum];
}

console.log(getMyMonth("2024-2-19"));
