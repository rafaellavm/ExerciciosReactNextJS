import {useState} from 'react';

export default function mouse(props) {

    //const arrayX = useState(0);
    //let x = arrayX[0];
    //const alterarX = arrayX[1];

    const[x, setX] = useState(0);

    const arrayY = useState(0);
    let y = arrayY[0];
    const alterarY = arrayY[1];

    const estilo = {
         backgroundColor: "#222", 
         color: "#fff", 
         height: "100vh", 
         display: "flex", 
         justifyContent: "center", 
         alignItems: "center",
        flexDirection: "column" };

        function quandoMover(ev){
            //console.log('ev =',ev.clientX, ev.clientY);

            setX(ev.clientX);
            alterarY(ev.clientY);


        }

    return (
        <div style={estilo} onMouseOver={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}