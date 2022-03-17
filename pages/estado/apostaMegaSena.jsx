import { useState } from 'react';

export default function apostaMegaSena() {

    const [quantidadeDeNumeros, setValor] = useState(1);

    return (<div>
        <h1>Aposta Mega Sena</h1>
        <p>Digite quantos números deseja sortear:</p>
        <p><input type="text" value={quantidadeDeNumeros} onChange={evento => setValor(evento.target.value)} /></p>
        <p><button onClick={criarArrayDosNumeros}>Clique para sortear os números</button></p>
        <p id="listagemDosNumerosSorteados"></p>
    </div>)

    function criarArrayDosNumeros() {

        var array = [];

        for (var i = 0; i <= quantidadeDeNumeros - 1; i++) {

            array.push(Math.round(gerarNumerosAleatorios()));
        }

        var ul = document.getElementById("listaDeNumerosSorteados");
        var texto = "";
        //console.log(ul);

        document.getElementById("listagemDosNumerosSorteados").textContent = array.join(',');

    };

    function gerarNumerosAleatorios() {

        return Math.random() * (60 - 0) + 0;
    }

}

function function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li);
}3


// declarando uma funcao antes do ES6
//const calcularSoma = function (a, b) {
    //return a + b;
//};

// utilizando arrow function
//const calcularSoma = (a, b) => {
    //return a + b;
//};

// forma resumida (return e chaves implícito)
//const calcularSoma = (a, b) => a + b;