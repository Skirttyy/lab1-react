import { salutUtilizator } from "./Rezolvare.js";
import { adunare, scadere } from "./mathUtils.js";
import salut from "./salutari.js";
import * as date from "./dateUtlizator.js";


// 7.4 În fișierul main.js importați funcția cu un nume ales de utilizator și folosiți-o pentru a saluta un utilizator.
async function salutAsync(nume) {
    const rezultat = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(salutUtilizator(nume));
        }, 1000);
    });

    console.log(rezultat);
}

salutAsync("Andrei");

// 7.2 În fișierul main.js importați funcțiile și folosiți-le pentru a calcula suma și diferența a două numere.

console.log("Sarcina 7.1:" + adunare(1,2), scadere(1,2))

// 7.3 În fișierul salutari.js exportați implicit o funcție care afișează un mesaj de salut.
salut()

// 7.6 În fișierul main.js importați întregul modul și accesați valorile exportate.

console.log(date.nume, date.varsta, date.email)