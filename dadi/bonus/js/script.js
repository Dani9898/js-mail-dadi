// prendere i vari elementi html
const pcElement = document.getElementById("pc_number");
const userElement = document.getElementById("user_number");

const pcBtn = document.getElementById("pc-btn");
const userBtn = document.getElementById("user-btn");
const vincitoreBtn = document.getElementById("vincitore-btn");

const vincitore = document.getElementById("vincitore");

// generare numeri randomici per utente e pc
let pcNumber = Math.floor(Math.random() *6 + 1);
let userNumber = Math.floor(Math.random() *6 + 1);

// al click scrivere che numero è uscito
pcBtn.addEventListener("click",
    function(){
        pcElement.innerHTML = `Il numero del pc è: ${pcNumber}`;
    }
)

userBtn.addEventListener("click",
    function(){
        userElement.innerHTML = `Il tuo numero è: ${userNumber}`;
    }
)


// cliccare il pulsante per sapere chi ha vinto
vincitoreBtn.addEventListener("click",
    function(){
        if (pcNumber > userNumber) {
            vincitore.innerHTML = "Il vincitore è il pc";
        } else if (pcNumber < userNumber) {
            vincitore.innerHTML = "Il vincitore sei tu";
        } else {
            vincitore.innerHTML = "Pareggio";
        }
    }
)










