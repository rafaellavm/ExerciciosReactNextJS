export default function lista2(){

    return (
        <div>
            {GerarLista()}
        </div>
    )
}

function GerarLista(){
   const lista = [
       <span>1</span>,
       <span>2</span>,
       <span>3</span>
   ]

   return lista; 
}