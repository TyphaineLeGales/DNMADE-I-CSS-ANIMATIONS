document.addEventListener("DOMContentLoaded", () => {

    // titre : chaque lettre s'envole quand on clique dessus
    const lettres = document.querySelectorAll("h1 span")
    lettres.forEach((lettre) => {
        lettre.addEventListener("click", () => {
            lettre.classList.add("envolee")
        })
    })

    // punchs : au clic, la phrase change de couleur et son sticker traverse l'écran
    const punchs = document.querySelectorAll(".punch")
    punchs.forEach((punch) => {
        punch.addEventListener("click", () => {
            punch.classList.add("active")
        })
    })

    // theme switcher : la classe "jour" sur le body redéfinit les variables CSS
    const bouton = document.querySelector(".theme")
    bouton.addEventListener("click", () => {
        document.body.classList.toggle("jour")
        if (document.body.classList.contains("jour")) {
            bouton.textContent = "Mode nuit"
        } else {
            bouton.textContent = "Mode jour"
        }
    })

    // musique : les navigateurs bloquent le son avant une interaction, donc on la lance au premier clic
    const musique = document.querySelector(".musique")
    document.addEventListener("click", () => {
        musique.play()
    })

})
