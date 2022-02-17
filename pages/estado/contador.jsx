import { useState } from 'react';
import ContadorDisplay from '../../components/ContadorDisplay';

export default function contador(props) {

    const[valor, setValor] = useState(0);
  
    const estilo = {
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    function quandoDiminuir() {

        setValor(valor - 1);
    }

    function quandoAumentar() {

        setValor(valor + 1);
    }

    //outra forma de fazer
    const multiplicarValorPorDois = () => setValor(valor * 2);

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <ContadorDisplay numero={valor}/>
            <p></p>
            <div>Valor: {valor}</div>
            <div><button onClick={quandoDiminuir}> Diminuir </button></div>
            <div><button onClick={quandoAumentar}> Aumentar </button></div>
            <div><button onClick={multiplicarValorPorDois}> Multiplicar por 2 </button></div>
            <div><button onClick={() => setValor(valor * 5)}> Multiplicar por 5 </button></div>
        </div>
    )
}