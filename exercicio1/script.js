let coxinha;
let conta = 0
while(coxinha !== "nao"){
    coxinha = prompt("Voce quer mais coxinha? (Digite Sim ou Nao)").toLowerCase()
    if(coxinha === "sim"){
        conta += 2.5
    }
    } 
    alert(`O valor total da conta e de ${conta}`)

