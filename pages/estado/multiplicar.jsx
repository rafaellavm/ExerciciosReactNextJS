import Multiplicador from "../../components/Multiplicador";
import { useState } from 'react';

export default function multiplicar(props) {

    const [valor, setValor] = useState(1);

    const estilo = {
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    function multiplicarPorDois() {
        setValor(valor * 2);
    }

    const somarMaisDois = () => setValor(valor + 2);

    //const multiplicarValorPorDois = () => setValor(valor * 2);
    const zerarOValor = () => setValor(valor = 0);

    const publicarMeuNome = () => setValor("Rafaela");

    return (
        <div style={estilo}>
            <h1>Multiplicador</h1>
            <Multiplicador numero={valor} />
            <div>Valor: {valor}</div>
            <button onClick={zerarOValor}> Zerar o valor</button><br />
            <button onClick={multiplicarPorDois}> Multiplicar por dois</button><br />
            <button onClick={somarMaisDois}> Somar mais 2</button><br />
            <button onClick={publicarMeuNome}> Publicar meu nome</button><br />

        </div>

    )
}