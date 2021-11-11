export default function lista2(){

    return (
        <div>
        <div>
            {GerarLista(20)}
        </div>
        <div>
            {GerarLista(3)}
        </div>
        </div>
    )
}

function GerarLista(final = 10){
    
    const lista = [];
    for(let i = 1; i<= final; i++)
    {
        lista.push(<span>{i},</span>)
    }
   return lista; 
}