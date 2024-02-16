// Test if script is connected to index.html
// console.log("fish");

const person = {
    firstName: "Pao",
    lastName: "Chang",
    age: 21,
    sayNameAge: function () {
        alert(`Hello y'all. My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old`);
    },
};
console.log(person.firstName, person.age);

// person.sayNameAge();
// ###############################################################

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: ["Gipsy", "Nala", "Dinky"],
    },
    {
        tiertyp: "Hunde",
        names: ["Knöpfchen", "Pinselchen", "Droopy"],
    },
];
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
unsereHaustiere[1].names[0] = "Wiesel";
console.table(unsereHaustiere[1]);
delete unsereHaustiere[1].names[2];
console.table(unsereHaustiere[1].names);

// ################################################################

let unserLager = {
    schreibtisch: {
        schublade: "Hefter",
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse",
        },
        "Untere Schublade": "Cola",
    },
};

console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);

// ################################################################

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true,
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true,
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
];

const container = document.querySelector(".container");

myMusic.forEach((band) => {
    container.innerHTML += `
  <div>
    <h3>${band.artist}</h3>
    <p>${band.title}</p>
    <p>${band.medium}</p>
  </div>
  `;
});

// ##################################################

const singers = [
    { name: "The Beatles", country: "United Kingdom", period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: "Elvis Presley", country: "United States", period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: "Michael Jackson", country: "United States", period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: "Elton John", country: "United Kingdom", period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: "Madonna", country: "United States", period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: "Led Zeppelin", country: "United Kingdom", period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: "Rihanna", country: "United States", period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: "Pink Floyd", country: "United Kingdom", period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

console.log(`Name: ${singers[0].name} `);
console.log(`Country: ${singers[0].country}`);
console.log(`Period Active: ${singers[0].period_active.start} - ${singers[0].period_active.end}`);
console.log(`Genre: ${singers[0].genre}`);

const output = document.querySelector("#table-container");

// console.log(output);

function tableMaker(elements) {
    console.log(elements);

    let tableHead = `
    
  <div class="table">
  <table>
    <tr>
      <th>Name</th>
      <th>Country</th>
      <th>Period Active</th>
      <th>Genre</th>
    </tr>
  `;
    elements.forEach((band) => {
        tableHead += `
      <tr>
        <td>${band.name}</td>
        <td>${band.country}</td>
        <td>${band.period_active.start} - ${band.period_active.end}</td>
        <td>${band.genre}</td>
      </tr>
      `;
    });
    tableHead += `
    </table>
      </div>
    `;
    return tableHead;
}

output.innerHTML = tableMaker(singers);

// const searchBtn = document.querySelector(".search");

// searchBtn.addEventListener("click", () => {
//   // Holt sich das Value
//   const inputVal = document.querySelector(".input").value;

//   // Filterfunktion ohne groß und klein schriebung. Alles wird in klein verglichen
//   const searchedMovies = movies.filter((item) => {
//     return item[0].toLowerCase().includes(inputVal.toLowerCase());
//   });

document.querySelector("button").addEventListener("click", () => {
    const input = document.querySelector("#search").value.toLowerCase();
    const result = singers.filter((band) => {
        return band.name.toLowerCase().includes(input);
    });
    result.length === 0 ? confirm("Not in List. Try again") : (output.innerHTML = tableMaker(result));
});
