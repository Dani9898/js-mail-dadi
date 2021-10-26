// prendere i vari elementi html
const pcElement = document.getElementById("pc_number");
const userElement = document.getElementById("user_number");
const vincitore = document.getElementById("vincitore");

// generare numeri randomici per utente e pc
let pcNumber = Math.floor(Math.random() * 6 + 1);
let userNumber = Math.floor(Math.random() * 6 + 1);

// mostrare numeri randomici
pcElement.innerHTML = `Il numero del pc è: ${pcNumber}`;
userElement.innerHTML = `Il tuo numero è: ${userNumber}`;

// annunciare il vincitore
if (pcNumber > userNumber) {
    vincitore.innerHTML = "Il vincitore è il computer";
} else if (pcNumber < userNumber) {
    vincitore.innerHTML = "Il vincitore sei tu";
} else {
    vincitore.innerHTML = "Essendo i numeri uguali abbiamo un pareggio!";
}




