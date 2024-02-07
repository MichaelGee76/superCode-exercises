// const txt =
//     "How inappropriate to call this planet Earth, when clearly it is Ocean.";

//const value01 = txt.indexOf("h");
//const value02 = txt.indexOf("Earth");
//const value03 = txt.indexOf("Moon");

// console.log(value01, value02, value03);

// const txt02 =
//     "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

// const pos01 = txt02.search(";");
// const pos02 = txt02.search("green");
// const pos03 = txt02.search("blue");

// console.log(pos01, pos02, pos03);

const txt03 = "Susi is going to codingschool";

const word01 = txt03.slice(0, 4);
// console.log(word01);
const word02 = txt03.slice(5, 7);
// console.log(word02);
const word03p = txt03.slice(4, 17);

const word04p = txt03.slice(23);
console.log(word04p);

const result = word03p.concat(word04p);
console.log(result);
const word05 = txt03.slice(0, 8);
console.log(word05);
const word06 = word05.concat(word04p);
console.log(word06);
console.log(txt03.indexOf("Susi"), txt03.indexOf("is"));
