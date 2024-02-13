function calorieCalc() {
    // Input Values
    const height = Number(document.querySelector("#groesse").value);
    const age = Number(document.querySelector("input[name='alter']").value);
    const weight = Number(document.querySelector("input[name='gewicht']").value);
    // Radio Button
    const gender = document.querySelector("input[name='gender']:checked").value;
    // Selection
    const palFactor = Number(document.querySelector("select").value);
    console.log(palFactor);
    // Output Field
    const umsatzCal = document.querySelector(".umsatz p:first-of-type");
    const umsatzJoule = document.querySelector(".umsatz p:last-of-type");
    const gesamtCal = document.querySelector(".gesamt p:first-of-type");
    const gesamtJoule = document.querySelector(".gesamt p:last-of-type");
    //  Cal to Joule 1 kcal = 4.1868KJ
    const cal2Joule = 4.1868;
    // If Statement checkt ob Input Felder Number ist, fals nicht- Alert!
    if (isNaN(height) === true || isNaN(age) === true || isNaN(weight) === true) {
        alert("Not a number, idiot! I guess you need a refresh of 'how to fill a form'.");
        window.open(link, "_blank") || window.location.replace(link);
    }
    // If Statement berechnet Umsatz Kalorien/Joule
    if (gender === "female") {
        // 655.1 + (9.6 * Körpergewicht in kg) + (1.8 * Körpergröße in cm) – (4.7 * Alter in Jahren) = Grundumsatz
        grundumsatzFemale = (655.1 + 9.6 * weight + 1.8 * height - 4.7 * age).toFixed(2);
        gesamtUmsatzFemale = (grundumsatzFemale * palFactor).toFixed(2);
        umsatzCal.textContent = grundumsatzFemale;
        gesamtCal.textContent = gesamtUmsatzFemale;
        umsatzJoule.textContent = (grundumsatzFemale * cal2Joule).toFixed(2);
        gesamtJoule.textContent = (gesamtUmsatzFemale * cal2Joule).toFixed(2);
        console.log({ grundumsatzFemale }, { gesamtUmsatzFemale });
    } else {
        // 66.47 + (13.7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6.8 * Alter in Jahren) = Grundumsatz
        grundumsatzMale = (66.47 + 13.7 * weight + 5 * height - 6.8 * age).toFixed(2);
        gesamtUmsatzMale = (grundumsatzMale * palFactor).toFixed(2);
        umsatzCal.textContent = grundumsatzMale;
        gesamtCal.textContent = gesamtUmsatzMale;
        umsatzJoule.textContent = (grundumsatzMale * cal2Joule).toFixed(2);
        gesamtJoule.textContent = (gesamtUmsatzMale * cal2Joule).toFixed(2);
        console.log({ grundumsatzMale }, { gesamtUmsatzMale });
    }
}
