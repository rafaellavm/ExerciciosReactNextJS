export default function Multiplicador(props){

    return (
        <div>
            <div style={{eight: "200px",width: "200px", borderRadius:"150px", backgroundColor: "green", 
        color: "white", fontSize: "2rem", display:"flex", justifyContent:"center", margin:"20px"
       }}>
           {props.numero}
           </div>
        </div>
    )
}