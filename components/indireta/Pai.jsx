import Filho from "./Filho";

export default function Pai(props){

    function falarComigo1(){
        console.log("Alguém falou comigo 1!");
    }

    function falarComigo2(param){
        console.log(param);
        console.log("Alguém falou comigo 2!");
    }

    function funcaoGeral(param1, param2){
        console.log("Alguém falou comigo 3 v2!");
        console.log('parâmetros 1= ', param1);
        console.log('parâmetros 2= ', param2);
        
    }

    return (
        <div>
            <Filho prop1={123} prop2="abc" funcao1={falarComigo1} funcao2={falarComigo2} funcaoGeral={funcaoGeral}/>
            {/*<Filho prop1={345} prop2="def" funcao1={falarComigo1} funcao2={falarComigo2} funcaoGeral={funcaoGeral}/>*/}
        </div>
    )
}