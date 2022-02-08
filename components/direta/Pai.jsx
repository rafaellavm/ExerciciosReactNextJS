
import Filho from "./Filho";

export default function Pai(props){

    return (
        <div>
           <Filho nome="Patricia" familia={props.familia} />
           <Filho nome="Rafaela" familia={props.familia} />
           <Filho nome="Ricardo" familia={props.familia} />
           <Filho nome="Peter" familia={props.familia} nome="Padrão"/>
           <Filho {...props} />
           <Filho {...props} nome="Principal" />
        </div>
    )
}