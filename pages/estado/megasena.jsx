import { useState } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';
import { mega } from '../../functions/mega';

export default function megasena() {
    
    const [qtde, setQtde] = useState(6);
    const [numeros, setNumeros] = useState([]);
    
    function renderNumeros() {
        return numeracao.map(numero => <NumeroDisplay numero={numero} key={numero} />)
        
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>Mega Sena</h1>
            <div style={{ display: "flex", flexWrap:"wrap", justifyContent: "center" }}>{renderNumeros()}</div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={evento => setQtde(evento.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
            </div>
        </div>
    )
}