import { salutUtilizator } from "./Rezolvare";
import { adunare, scadere } from "./mathUtils";
import { salutareeee } from "./salutari";
import { email } from "./dateUtlizator";


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

console.log(adunare(1,2), scadere(1,2))

// 7.3 În fișierul salutari.js exportați implicit o funcție care afișează un mesaj de salut.
salutareeee()

// 7.6 În fișierul main.js importați întregul modul și accesați valorile exportate.

console.log(nume, varsta, email)