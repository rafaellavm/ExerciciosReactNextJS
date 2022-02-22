export default function ContadorDisplay(props){

    return(
        <div style={{eight: "80px",width: "80px", borderRadius:"50px", backgroundColor: "red", 
        color: "#fff", fontSize: "2rem", display:"flex", justifyContent:"center", margin:"20px"
       }}>{props.numero}</div>
    )

}