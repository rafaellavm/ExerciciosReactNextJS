export default function NumeroDisplay(props){

    return(
        <div style={{
            height: "50px",
            width: "50px",
            borderRadius:"25px", 
            backgroundColor: "red", 
            color: "#fff",
            fontSize: "2rem",
            display:"flex",
            justifyContent:"center",
            padding: "20px",
            margin:"20px",
            alignItems: "center"
       }}>{props.numero}</div>
    )

}