alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero entre 1 e " + numeroMaximo);
    if (numeroSecreto == chute) {
        break;
    }
    else {
        if (numeroSecreto > chute) {
            alert("O numero secreto é maior que " + chute);
        }
        else {
            alert("O numero secreto é menor que " + chute);
        }
        tentativas++

    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentiva";
alert("Voce acertou o numero secreto " + numeroSecreto + " com " + tentativas + " " + palavraTentativa);

// if (tentativas > 1) {
//    alert("Voce acertou o numero secreto " + numeroSecreto + " com " + tentativas + " tentativas");
//}
//else {
//    alert("Voce acertou o numero secreto " + numeroSecreto + " com " + tentativas + " tentativa");
//}
