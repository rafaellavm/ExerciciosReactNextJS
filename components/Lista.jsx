export default function Lista(props){
    return (
        //<ul>
           //{props.children} 
        //</ul>

        <div>
            <h1>Lista de Algo</h1>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}