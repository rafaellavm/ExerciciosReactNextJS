import listaProduto from '../../data/listaProduto'
import lista from '../../data/listaProduto'

export default function repeticao2(){

    const borda = {border: "1px solid #ccc;"}

    function renderizarLinhas(){

        return listaProduto.map(produto =>{

            return (
                <tr key={produto.id}>
                    <td style={borda}>{produto.id}</td>
                    <td style={borda}>{produto.nome}</td>
                    <td style={borda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={borda}>
                <thead>
                    <tr >
                        <th style={borda}>Código</th>
                        <th style={borda}>Nome</th>
                        <th style={borda}>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}