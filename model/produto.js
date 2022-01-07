export default class Produto{

    _id;
    _nome;
    _preco;

    constructor(id, nome, preco){

        this._id = id;
        this._nome = nome;
        this._preco = preco;       
    }

    get id(){
        return this._id;
    }

    get nome(){
        return this._nome;
    }

    get preco(){
        return this._preco;
    }
}