const person = ["Hans", "Franz", "Pino"];
const friends = ["Santa", "Jack", "Black"];
const favoriteFood = ["Kohl", "Kraut", "Tomaten"];

console.log(person);
console.log(friends);
console.log(favoriteFood);

console.log(friends[1]);
console.log(person[2]);
console.log(favoriteFood[0], favoriteFood[1], favoriteFood[2]);

console.log(person.length); //3

person.push("Hannah", "Franzi");
console.log(person);
friends.push("Frieder", "Jonas", "Hallimash", "Korpulento");
console.log(friends);

const gepopt = person.pop();
console.log(gepopt);
const nochmaGepopt = friends.pop();
console.log(nochmaGepopt);

console.log(person);

person.unshift("Lavendel", "Heidekraut");
console.log(person);

console.log(friends);

friends.unshift("Laberaber", "Kacki");
console.log(friends);

console.log(favoriteFood);
favoriteFood.unshift("Rettich", "Karotten");
console.log(favoriteFood);

const bimBam = [23, 54, 75];

bimBam.push(85, 55, 98, 12, 33, 56);
console.log(bimBam);

bimBam.unshift(36, 99, 2016, 59, 1);
console.log(bimBam);

const weg = bimBam.pop();
console.log(weg);
bimBam.pop;
console.log(bimBam);

bimBam.shift();
console.log(bimBam);
bimBam.shift();
console.log(bimBam);
