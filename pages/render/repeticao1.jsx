export default function repeticao1(){

    const listaDeAprovados = [
        "João", "Maria", "Ana","Bia", "Carla","Daniel"
    ]

   

function renderizarLista(){

    //função map = transformar um elemento em outro
   // return listaDeAprovados.map((nome ,i) => <li key={i}>{nome}</li>)

   return listaDeAprovados.map(function (nome,i){
       return <li key={i}>nome</li>
   })
}

    return(
        <ul>
           {renderizarLista()}
        </ul>
    )
}

/*function renderizarLista(){

    const itens = [];

    for (let i =0; i < listaDeAprovados.length; i++){
        itens.push(<li key={i}>{listaDeAprovados[i]}</li>)
    }

    return itens;
}*/