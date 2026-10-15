console.log("hello gobelins") // le console log permet de débugger et d'afficher des messages dans la console de son navigateur
const myFirstVariable = "hello"
let mySecondVariable = 3
mySecondVariable += 2
mySecondVariable = mySecondVariable - 2
mySecondVariable -= 4
let clickCount = 0
let paragraph;
let circle2;
let list = []
let paragraphes, p


if(mySecondVariable !== 0) {
    // le code s'execute si ma condition est remplie
    console.log("supérieur a zéro")
} else {
    console.log("inférieur a zéro")
}

document.addEventListener("DOMContentLoaded", () => {
    // on a accès aux éléments HTML que quand le document est complètement loadé
    console.log("document loaded")
    paragraphes = document.querySelectorAll("p") // contiens tous les paragraphes
    p = document.querySelector("p") //contiens seulement le 1er paragraphe

    // la méthode forEach permet d'exécuter le même block de code pour tous les élements d'une liste
    paragraphes.forEach(el => {
        console.log("inside for loop", el)
        el.classList.add('red')
    })
})