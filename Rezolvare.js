var var1 = 11
let var2 = "456"
const var3 = true

function functie (element) {
    return typeof(element)
}

numToString = Number.toString(var1)
stringToNum = Number(var2)
console.log(functie(numToString))
console.log(functie(stringToNum))

let nume = "Rusu Catalin"
let varsta = 20
console.log(`Salut! Numele meu este ${nume} si am varsta de ${varsta} ani`)

// 1.5 Var temporara ca sa schimbi varA si varB

let varA = 1
let varB = 2

console.log(`Var A: ${varA} Var B: ${varB}`);

let tempVar = varA
varA = varB
varB = tempVar

console.log(`Var A: ${varA} Var B: ${varB}`);

// 1.6 :: Scrieți o funcție care verifică dacă o variabilă este de tip null sau undefined.

let varA_1 = null
let varB_2 = 1

function isNull (element) {
    if (element === null || element === undefined) {
        console.log("Variabila este null/undefined!")
    } else {
        console.log("Tat zbs")
    }
}

isNull(varA_1)
isNull(varB_2)

// 1.7 :: Creați un obiect cu mai multe proprietăți (string, number, boolean). Adăugați și eliminați dinamic o proprietate la obiect.

let student = {
    nume: "Rusu Catalin",
    varsta: 10,
    facultate: "Matematica si Informatica"
}

student.universitate = "USM"
console.log(`Studentul cu numere ${student.nume} e la universitatea ${student.universitate}`)
delete student.universitate
console.log(`Studentul cu numere ${student.nume} e la universitatea ${student.universitate}`)

// 1.8 :: Declarați un array care conține minim 5 valori fiecare un tip de date diferit. Iterați prin array și afișați tipul fiecărui element.

let arr = [1, true, "Catalin", null, undefined]
arr.forEach(element => {
    console.log(`Element: ${element}; Tipul: ${typeof(element)}`)
});

// 2.1 Scrieți o funcție care primește două numere ca parametri și returnează suma lor.

function sum(a, b) {
    return a + b
}

// 2.2 Creați o funcție care calculează aria unui dreptunghi. Dacă înălțimea nu este specificată, să aibă valoarea implicită de 1.

function ariaUnuiDreptunghi (length, height = 1) {
    return length * height
}

// 2.3 Declarați o funcție anonimă și asociați-o unei variabile. Funcția să returneze pătratul unui număr.

let squareNum = (num) => num * num
console.log(squareNum(2))

// 2.4 Scrieți o funcție care primește un string, îl convertește la litere mari și returnează numărul de caractere.

function toUpperCase (string) {
    return string.toUpperCase()
}

console.log(toUpperCase("Aloalo"))

// 2.5 Creați o funcție principală care primește un număr și folosește alte două funcții: una pentru a calcula dublul numărului și alta pentru a calcula pătratul. Returnați rezultatele ambelor într-un obiect.

function doubleNumber (number) {
    return number * 2
}

function returnObject (number) {
    return {
        dublu: doubleNumber(number),
        patrat: squareNum(number)
    }
}

// 2.6 Rescrieți funcția de calcul al sumei folosind o expresie săgeată.

let sumRe = (a,b) => a+b

// 2.7 Scrieți o funcție care aplică o altă funcție asupra fiecărui element al unui array.

function doubleArray (array) {
    array.map((element, index) => {
        array[index] = doubleNumber(element)
    })
}

let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr1)
doubleArray(arr1)
console.log(arr1)

// 3.1 Declarați un obiect masina cu următoarele proprietăți: marca, model, și an. Atribuiți valori pentru fiecare proprietate.

let car = {
    merch: "Mercedes",
    model: "G-Class",
    year: 2024,
}

// 3.2 Afișați valoarea proprietăților marca și model utilizând atât notația cu punct, cât și cea cu paranteze pătrate.

console.log(car.merch)
console.log(car.model)
console.log(car.year)
console.log(car["merch"], car["model"], car["year"])

// 3.3 Adăugați o proprietate nouă, culoare, și actualizați proprietatea an cu o valoare diferită.

car.doors = 4
car.year = 2025

console.log(car.doors)
console.log(car.year)

 // 3.4 Ștergeți proprietatea model din obiect.
 
 delete car.merch
 console.log(car.merch)
 
 // 3.5 Folosiți for...in pentru a itera prin toate proprietățile unui obiect și afișați cheile și valorile acestora.
 
 for (prop in car) {
     console.log(`${prop}: ${car[prop]}`)
 }
 
 // 3.6 Adăugați o metodă descriere în obiectul masina care să returneze un string cu toate informațiile despre mașină.
 
 car.description = `model: ${car.model}, year: ${car.year}, doors: ${car.doors}`
 console.log(car.description)
 
 // 3.7 Scrieți o funcție care primește un obiect persoana cu proprietăți nume și varsta și returnează un mesaj personalizat, în care să se conțină valorile ambelor proprietăți.
 
 function returnObjProp (object) {
     reurn `Name: ${object.name}, Age: ${object.age}`
 }
 
 // 3.8 Verificați dacă obiectul masina conține o proprietate culoare utilizând operatorul in.
 
 if ("model" in car) {
     console.log(`This car have a model!`)
 }
 
 // 3.9 Declarați un obiect casa care să conțină un alt obiect adresa cu proprietăți precum strada și oras.
 
 let casa = {
    adresa: {
         street: "Street",
         city: "City"
     }
 }
 
 console.log(casa)
 
 // 3.10 Scrieți o funcție care primește parametri, creează și returnează un obiect student cu proprietățile nume, varsta și nota.
 
 function createStudent (name, age, note) {
     return student = {
         name: name,
         age: age,
         note: note
     }
 }
 
 console.log(createStudent("Catalin", 20, 10))
 
 // 3.11 Folosiți Object.assign și operatorul spread (...) pentru a clona obiectul masina în alte obiecte.
 
 let carCopy = {}
 Object.assign(carCopy, {...car})
 
 // 3.12 Creați un obiect calculator cu metode pentru adunare, scădere, înmulțire și împărțire.
 
 let calculator = {
     adunare: (a,b) => a + b,
     scadere: (a,b) => a - b,
     inmultire: (a,b) => a * b,
     impartire: (a,b) => a / b
 }
 
 // 3.13 Folosiți destructurarea pentru a extrage câteva proprietăți dintr-un obiect.
 
let { adunare, scadere } = calculator
console.log(adunare(1,2))

// 4.1 Declarați un array cu trei nume de orașe și afișați primul și ultimul element.

let arrCity = ["Chisinau", "bea", "koniak"]
console.log(arrCity[0], arrCity[arrCity.length - 1])

// 4.2 Adăugați un oraș la sfârșitul și începutul array-ului. Ștergeți ultimul oraș.

arrCity.push("Balti")
arrCity.unshift("Balti")
arrCity.pop()

console.log(arrCity)

// 4.3 Folosiți un for pentru a itera printr-un array de culori și afișați fiecare element.

const culori = ["rosu", "verde", "albastru"];
for (let i = 0; i < culori.length; i++) {
  console.log(culori[i]);
}

// 4.4 Folosiți metoda forEach pentru a parcurge un array cu denumiri de animale și afișați fiecare element cu un mesaj personalizat.

const animale = ["caine", "pisica", "iepure"];
animale.forEach((elem) => console.log(elem))

// 4.5 Scrieți o funcție care primește un array de numere și returnează doar numerele mai mari de 10.

function returnMoreThan10 (arr) {
    let returnArr = []
    arr.forEach((elem) => {
        if (elem > 10) {
            returnArr.push(elem)
        }
    })
    return returnArr
}

console.log(returnMoreThan10([1,2,3,20,11,13,4]))

// 4.6 Declarați un array de numere și sortați-l în ordine crescătoare.

let arrayOfNums = [10,2,4,5,11,231,45,13]
arrayOfNums.sort((a,b) => a-b)
console.log(arrayOfNums)

// 4.7 Scrieți un program care primește un array de numere și returnează un nou array cu pătratele fiecărui număr, utilizând funcția map.

function squareArray (array) {
    array.map((element, index) => {
        array[index] = element * element
    })
}

// 4.8 Calculați suma elementelor dintr-un array folosind funcția reduce.

let sumofarr = arrayOfNums.reduce((accumulator, currentValue) => {
  return currentValue
}, 0);
console.log(sumofarr)

// 4.9 Verificați dacă un anumit element există într-un array folosind includes și indexOf.

console.log(arrayOfNums.includes(2))
console.log(`${arrayOfNums.indexOf(2)} index, value: ${arrayOfNums[arrayOfNums.indexOf(2)]}`)

// 4.10 Combinați două array-uri de cuvinte într-unul singur folosind concat sau operatorul spread (...).

let arrCombined = [...culori, ...animale]
console.log(arrCombined)

// 4.11 Declarați un array bidimensional pentru o matrice 2x2 și accesați elementul de pe linia 1, coloana 2.

let arrBi = [[0,1], [2, 3]]
console.log(arrBi[0][1])

// 4.12 Scrieți o funcție care elimină elementele duplicate dintr-un array.

function eliminaDuplicate(array) {
  return [...new Set(array)];
}

// 4.13 Folosiți slice pentru a crea un sub-array și splice pentru a elimina elementul cu indexul 2.

let slicedArrAnimale = animale.slice(0,2)
console.log(slicedArrAnimale)
animale.splice(1, 1)
console.log(animale)

// 5.1 Selectați un element <h1> dintr-un document HTML folosind getElementById și schimbați textul acestuia.

let h1 = document.getElementById("h1")
h1.innerText = "Nou text"

// 5.2 Selectați toate elementele <li> dintr-un document folosind querySelectorAll și schimbați culoarea textului.

let allLi = document.querySelectorAll("li")
allLi.forEach((elem) => {
    elem.style.color = "red"
})

// 5.3 Creați un element <p>, adăugați un text în acesta și introduceți-l la sfârșitul unui element <div> cu ID-ul container.

let paragraph = document.createElement('p')
paragraph.innerText = "Acesta este un paragraf creat in js"
let container = document.createElement('div')
container.id ="container"
document.body.appendChild(container)
container.appendChild(paragraph)

// 5.4 Selectați o imagine și schimbați valoarea atributului src.

let image = document.getElementById('img')
image.src = "image.jpg"

// 5.5 Adăugați o clasă nouă unui element cu ID-ul box.

let box = document.getElementById("box")
box.classList.add("bgcolor")

// 5.6 Eliminați un element <p> dintr-un document.

let paragraphtoDel = document.getElementById("paragraphToDelete")
paragraphtoDel.remove()

// 5.7 Adăugați un eveniment click unui buton, astfel încât să schimbe textul unui <h2> când este apăsat.

let button = document.getElementById("button")
button.addEventListener("click", () => {
    box.style.color = "blue"
    box.innerText = "Ai schimbat textu!"
})

// 5.8 Monitorizați un câmp de text și afișați mai jos conținutul acestuia într-un paragraf în timp real.

let textInput = document.getElementById("textInput")
let textOutput = document.getElementById("texOutput")

textInput.addEventListener("input", () => {
    textOutput.innerText = textInput.value
})

// 5.9 Selectați un element <ul> și afișați textul primului și ultimului copil.

const lista = document.getElementById('lista');

const primul = lista.firstElementChild;
const ultimul = lista.lastElementChild;

document.getElementById('afisarePrimul').textContent = "Primul element: " + primul.textContent;
document.getElementById('afisareUltimul').textContent = "Ultimul element: " + ultimul.textContent;


// 5.10 Alternați o clasă active pe un element atunci când este apăsat un buton.

button.addEventListener("click",() => {
    button.classList.add("active")
})

// 5.11 Creați dinamic un tabel HTML cu 3 rânduri și 2 coloane.

const tabel = document.createElement('table');
tabel.border = "1";

for (let i = 1; i <= 3; i++) {
    const rand = document.createElement('tr');
    for (let j = 1; j <= 2; j++) {
    const celula = document.createElement('td');
    celula.textContent = `R${i}C${j}`;
    rand.appendChild(celula);
    }
    tabel.appendChild(rand);
}

document.getElementById('containerTable').appendChild(tabel);

// 5.12 Creați o listă <ul> și adăugați elemente noi la apăsarea unui buton.

let inputButton = document.getElementById('inputButton')
let inputList = document.getElementById('inputList')
let ulList = document.createElement("ul")
document.getElementById("containerUl").appendChild(ulList)

inputButton.addEventListener("click", ()=> {
    let liCustom = document.createElement("li")
    liCustom.textContent = inputList.value
    ulList.appendChild(liCustom)
})

// 6.1 Scrieți un program care afișează un mesaj în consolă după 3 secunde.

setTimeout(() => {
    console.log("Acesta este un mesaj dupa 3 secunde!")
}, 3000)

// 6.2 Creați un cronometru care afișează numere de la 1 la 5, câte unul pe secundă, și apoi se oprește.

let numar = 1
const interval = setInterval(() => {
    console.log(numar);
    numar++;

    if (numar > 5) {
    clearInterval(interval);
    }
}, 1000);

// 6.3 Scrieți o funcție salut care primește un callback (altă funcție ca parametru) și îl apelează după ce afișează un mesaj.

function salut(callback) {
    console.log("Salut!")
    callback()
}

function altMesaj() {
    console.log("Mesaj final!")
}

salut(altMesaj)

// 6.4 Creați o funcție care returnează un Promise ce se rezolvă după 2 secunde.

function delay2Sec() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("Tot ok!")
        }, 2000)
    })
}

delay2Sec().then(console.log)

// 6.5 Creați o funcție care returnează un Promise ce poate fi respinsă sau rezolvată în funcție de valoarea unui parametru.

let bool = false
function asyncPromise () {
    return new Promise((resolve, reject) => {
        if (bool === true) {
            resolve("Parametru e true, deci tot ok!")
        } else {
            reject("Parametru e false, nu s-a rezolvat")
        }
    })
}

asyncPromise().then(console.log).catch(console.log)

// 6.6 Scrieți o funcție asincronă care apelează fucția de la punctul 7.4 și afișează rezultatul.

// export function salutUtilizator(nume) {
//     return `Salut, ${nume}!`;
// }

// 6.7 Creați trei funcții care returnează promisiuni și apelează-le în lanț.

function firstPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Primul promise a fost rezolvat!")
        }, 3000);
    }) 
}

function secondPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Al doilea promise a fost rezolvat!")
        }, 3000)
    }) 
}

function thirdPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Al treilea promise a fost rezolvat!")
        }, 3000)
    }) 
}

async function launchPromises() {
    let fPromise = await firstPromise()
    console.log(fPromise)
    let sPromise = await secondPromise()
    console.log(sPromise)
    let tPromise = await thirdPromise()
    console.log(tPromise)
}
launchPromises()

// 6.8 Utilizați fetch pentru a prelua date de la o API publică (de exemplu, JSONPlaceholder https://jsonplaceholder.typicode.com/guide/) și afișați rezultatele.

async function getAPI() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let message = await response.json()
    console.log(message.title)
}
getAPI()

// 6.9 Folosiți Promise.all și Promise.allSettled pentru a aștepta rezolvarea mai multor promisiuni.

function primaFunctie() {
    return new Promise(resolve => setTimeout(() => resolve("Rezultat 1"), 1000));
}

function aDouaFunctie() {
    return new Promise((resolve, reject) => setTimeout(() => reject("Eroare 2"), 1500));
}

function aTreiaFunctie() {
    return new Promise(resolve => setTimeout(() => resolve("Rezultat 3"), 500));
}

async function rularePromises() {
    try {
        const rezultateAll = await Promise.all([primaFunctie(), aTreiaFunctie()]); 
        console.log("Rezultate Promise.all:", rezultateAll);
    } catch(err) {
        console.log("Eroare Promise.all:", err);
    }

    const rezultateAllSettled = await Promise.allSettled([primaFunctie(), aDouaFunctie(), aTreiaFunctie()]);
    console.log("Rezultate Promise.allSettled:", rezultateAllSettled);
}

rularePromises()


