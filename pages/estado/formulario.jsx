import { useState } from 'react';

export default function formulario() {

    const [valor, setvalor] = useState("inicial");

    const alterarInput = () => setvalor(valor + "!");

    return (
        <div style={{display: "flex", flexDirection: "column", width:"300px"}}>
            <span>{valor}</span>
            <input type="text" value={valor} onChange={evento => setvalor(evento.target.value)}/>
            <input type="text" value={valor} readOnly/>
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}