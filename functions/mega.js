function mega(qtde = 6, numeros = []) {

    console.log('qtde = ', qtde);
    console.log('numeros = ', numeros);

    if (qtde < 6 && qtde > 60) {
        throw "Quantidade inválida!";
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2);
    }
    const numeroAleatorio = parseInt(Math.random() * 60) + 1;

    if (!numeros.includes(numeroAleatorio)) {

        console.log('entrou');
        return mega(qtde, [...numeros, numeroAleatorio]);
    } else {
        mega(qtde, numeros)
    }

}
console.log(mega());