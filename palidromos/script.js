const palavra = prompt("Informe uma palavra:");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
    alert(
        palavra + " é um palíndromo!\n\n" + palavra + " == " + palavraInvertida
    );
} else {
    alert(
        palavra +
            " não é um Palíndromo\n\n" +
            palavra +
            " !== " +
            palavraInvertida
    );
}
