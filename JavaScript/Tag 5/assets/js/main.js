// function check() {
//     const buLand = document.querySelector("input[type=text]").value;
//     const buLaInfoErg = document.querySelector("h1");
//     // console.log(buLand);
//     switch (buLand) {
//         case "Bayern":
//             buLaInfoErg.textContent =
//                 "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
//             break;
//         case "Baden-Württemberg":
//             buLaInfoErg.textContent =
//                 "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
//             break;
//         case "Berlin":
//             buLaInfoErg.textContent =
//                 "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
//             break;
//         case "Brandenburg":
//             buLaInfoErg.textContent =
//                 "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
//             break;
//         case "Bremen":
//             buLaInfoErg.textContent =
//                 "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
//             break;
//         case "Hamburg":
//             buLaInfoErg.textContent =
//                 "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
//             break;
//         case "Hessen":
//             buLaInfoErg.textContent =
//                 "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
//             break;
//         case "Mecklenburg-Vorpommern":
//             buLaInfoErg.textContent =
//                 "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
//             break;
//         case "Hessen":
//             buLaInfoErg.textContent =
//                 "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
//             break;
//         case "Niedersachsen":
//             buLaInfoErg.textContent =
//                 "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
//             break;
//         case "Nordrhein-Westfalen":
//             buLaInfoErg.textContent =
//                 "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
//             break;
//         case "Rheinland-Pfalz":
//             buLaInfoErg.textContent =
//                 "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
//             break;
//         case "Saarland":
//             buLaInfoErg.textContent =
//                 "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
//             break;
//         case "Sachsen":
//             buLaInfoErg.textContent =
//                 "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
//             break;
//         case "Saarland":
//             buLaInfoErg.textContent =
//                 "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
//             break;
//         case "Sachsen-Anhalt":
//             buLaInfoErg.textContent =
//                 "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
//             break;
//         case "chleswig-Holstein":
//             buLaInfoErg.textContent =
//                 "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
//             break;
//         case "Thüringen":
//             buLaInfoErg.textContent =
//                 "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
//             break;
//         default:
//             buLaInfoErg.textContent =
//                 "Ein solches Bundesland gibt es in Deutschland nicht.";
//     }
// }
// console.log("Fish");

// ###########################################################################

function showTxt() {
    // console.log("fish");

    const selection = document.querySelector("#myform select").value;
    // console.log(selection);
    const table = document.querySelector(".boxMasse tr td ");
    // console.log(table);
    const masse = document.querySelector("#masse");
    switch (selection) {
        case "0":
            table.innerHTML = "Brief und Postkarte Schmeiss weg den Scheiss!";
            break;
        case "1":
            table.innerHTML = "DHL Paket 2 kg - brauch mer net";
            break;
        case "2":
            // Mit den backticks können mehrzeilige strings erstellt werden!
            table.innerHTML = `<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm`;
            break;
        case "3":
            table.innerHTML =
                "Wir versenden keine Kühlschränke; Mikrowellen oder Kleinmöbel. Sag mal, Geht`s noch???";
            break;

        default:
            table.innerHTML = "Default Mefault ";
    }
}

// ################## ternary #############################

// function checkAge(event) {
//     event.preventDefault();
//     const age = document.querySelector("input:first-of-type").value;
//     const output = document.querySelector("#output");
//     console.log(age);
//     const isOld =
//         age <= 18
// ? (output.textContent = "No Go, too young!")
//             : (output.textContent = "Passt scho, lassn rein!");
// }

// function pwChecker() {
//     const output = document.querySelector("h2");
//     const pw = document.querySelector("input:first-of-type").value.length;
//     const save =
//         pw >= 8
//             ? (output.textContent = "Save, don't worry *fg*!")
//             : (output.textContent = "Not Save, go home loooser!");
// }

// function send() {
//     console.log("fish");
//     const errorMsg = "Wer nix zu sagen hat sollte die Fresse halten!";
//     const toSend = document.querySelector("input:first-of-type").value;
//     const error = document.querySelector("h3");
//     const lastMessage = document.querySelector("#laMess");
//     const msg =
//         // length muss größer Null sein NICHT größer gleich NULLLLLLLLLL
//         // so nicht: teSend.length >= 0 <<<<<-------NEINEINEINEINEINEINEINEINNH
//         toSend.length > 0
//             ? ((lastMessage.textContent = toSend), (error.textContent = " "))
//             : (error.textContent = errorMsg);
//     console.log(msg);
// }
