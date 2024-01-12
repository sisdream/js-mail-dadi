// generatore numeri random

let dado = Math.floor(Math.random() * 6 + 1);
console.log(dado);

// generatore del computer

let pcDado = Math.floor(Math.random() * 6 + 1);
console.log(pcDado);

//  variabile append

const result = document.getElementById('result');

// evento

document.getElementById('play').addEventListener('click',

    function(){
        if(dado === pcDado){
            result.innerText = "avete pareggiato!";
        }else if (dado > pcDado){
            result.innerText = "ha vinto l'utente!";
        }else{
            result.innerText = "ha vinto il pc!";
        }
    }
)
