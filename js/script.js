// array 
const mailList = ["gojosatoru@prova.it" , "riomensukuna@prova.com" , "mikasasukasa@prova.it" , "diobrando@prova.it" ,];
console.log("Queste sono le mail: " + mailList);

// input
let mail = prompt("Qual'è la tua email?");


// convalidare
const valid = document.getElementById('true');
const invalid = document.getElementById('false')


// ciclo for

let x = false;

for(let i = 0; i < mailList.length; i++){
  if(mail === mailList[i]){
    console.log(`${mail} trovata al posto: ${i}`)
    x = true;
  }
}

if(x === true){
  valid.append("La tua mail c'è!");
}else{
  valid.append("Mi dispiace, la tua mail non c'è.");
}
