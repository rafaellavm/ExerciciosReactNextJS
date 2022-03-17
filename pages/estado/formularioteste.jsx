import { useState } from "react";

export default function formularioteste(){

    const[valor,setValor] = useState("Inicial");

    const alterarValor = () => setValor(valor + "!!!!");

    return (
        <div>
        <h1>Formulário de Teste</h1>
        <p><input type="text" value={valor} onChange={evento => setvalor(evento.target.value)}/></p>
        <p><button onClick={alterarValor}>Alterar valor</button></p>
        </div>
    )
}