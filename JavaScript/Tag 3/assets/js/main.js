function calcAge(event) {
    event.preventDefault();
    const yearOfBirth = document.querySelector("#yob").value;

    const currentYear = 2024;
    const result = currentYear - yearOfBirth;
    console.log(result);
    const outputHeading3 = (document.querySelector(".yourAge").innerHTML =
        result);
}

// ############# Berechne den Unterschied ####################

function calcDifference(event) {
    event.preventDefault();
    const age1 = document.querySelector("#alter1").value;
    const age2 = document.querySelector("#alter2").value;

    const difference = age1 - age2;
    console.log(difference);
    const outputDiff = (document.querySelector(".diff").innerHTML = difference);
}
