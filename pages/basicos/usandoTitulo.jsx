import Titulo from '../../.next/components/Titulo'

export default function usandoTitulo(){
    return(
        <div>
            <Titulo 
            principal="Página de Cadastro" 
            secundario="Incluir, alterar e excluir coisas!"
            pequeno={true} />

            <Titulo 
            principal="Página de Login" 
            secundario="Informe seu e-mail e senha" 
            /> 

             <Titulo 
            principal="Página de Login" 
            secundario="Informe seu e-mail e senha" pequeno

            />       

        </div>
    )
}