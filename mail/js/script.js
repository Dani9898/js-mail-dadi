let invito = document.getElementById("invito");
const arrEmail = ["email0@gmail.com","email1@gmail.com","email2@gmail.com","email3@gmail.com","email4@gmail.com",];
let userEmail = prompt("Inserisci la tua email");


// controllare se l'email corrisponde con un oggetto dell'array allora scrivere nel div sei stato invitato alla festa se no, non sei stato invitato alla festa

// confrontare prima l'email con ogni oggetto dell'array e se corrisponde portare a true la variabile corrisponde. Se l'email non corrisponde allora scriviamo che non è stato invitato alla festa. Atrimenti si
let emailCorrisponde = false;

for (let i = 0; i < arrEmail.length; i++) {
    if (userEmail === arrEmail[i]) {
        emailCorrisponde = true;
    }
}

console.log(emailCorrisponde);

if (emailCorrisponde === true) {
    invito.innerHTML = "Sei stato invitato alla festa";
} else {
    invito.innerHTML = "Non sei stato invitato alla festa"
}