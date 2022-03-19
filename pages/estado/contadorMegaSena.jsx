import { useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';

export default function contador(props) {

    const[valor, setValor] = useState(0);
  
    const estilo = {
        backgroundColor: "#ccc",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <NumeroDisplay numero={valor}/>
        </div>
    )
}