let day = true;
let night = false;
let damn = "damn";

let clickHouse = 1;
let firstNumber = 5;
let secondNumber = 6;

if (firstNumber >= secondNumber){
    console.log("SUPERIOR OR EQUAL");
}
else{
    console.log("Nah...");
};

console.log(document);
document.addEventListener("keypress", (a) => {
    console.log("You clicked: ", clickHouse, " times")
    clickHouse += 1
});



document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded")
    const paragraphe = document.querySelectorAll("p");
    paragraphe.forEach(el => {
        el.classList.add('red')
        console.log(paragraphe)
    })
})


// if (day){
//     console.log("Its day");
// }
// else{
//     console.log("Its night time");
// };


// console.log("hello" + " " + damn);