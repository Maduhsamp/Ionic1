export class Numeros {
    private _primeiroNumero: number;
    private _segundoNumero: number;
    private _resultado: number;
    private _operacao!: number;

    constructor (primeiroNumero : number, segundoNumero : number, resultado : number){
        this._primeiroNumero = primeiroNumero;
        this._segundoNumero = segundoNumero;
        this._resultado = resultado;
    }

    public get primeiroNumero() : number{
        return this._primeiroNumero;
    }

    public set primeiroNumero(primeiroNumero: number){
        this._primeiroNumero = primeiroNumero;
    }

    public get segundoNumero() : number{
        return this._segundoNumero;
    }

    public set segundoNumero(segundoNumero: number){
        this._segundoNumero = segundoNumero;
    }

    public get operacao() : number{
        return this._operacao;
    }

    public set operacao(operacao: number){
        this._operacao = operacao;
    }

    public get resultado() : number{
        return this._resultado;
    }

    public set resultado(resultado: number){
        this._resultado = resultado;
    }
}