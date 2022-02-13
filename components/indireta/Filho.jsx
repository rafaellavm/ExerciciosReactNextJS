export default function Filho(props){

    //console.log(props);
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao1}>Falar com o pai #01</button>
            <button onClick={evento => props.funcao2(evento)}>Falar com o pai #02</button>
            <button onClick={() => props.funcao2("Texto do filho para o pai")}>Falar com o pai #03</button>
            <button onClick={() => props.funcaoGeral}>Função geral #01</button>
            <button onClick={() => props.funcaoGeral("Teste da função geral", "parametro 2")}>Função geral #02</button>
        </div>
    )
}