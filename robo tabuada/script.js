const numero = prompt(
    "Olá! Eu sou o robô da tabuada\n Informe o numero que você deseja calcular a tabuada:"
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
    resultado +=
        " -> " + numero + "  *  " + fator + " = " + numero * fator + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado);
