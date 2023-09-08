export class Objetivo{

    private resultado: boolean;
    private descripcion: string;

    constructor(){
        this.resultado=false
    }
    public setresultado(resultado : boolean) {
        this.resultado = resultado;
    }
    public getresultado() : boolean {
        return this.resultado
    }
    
    public setdescripcion(descripcion : string) {
        this.descripcion = descripcion;
    }
    public getdescripcion() : string {
        return this.descripcion
    }
    
    public cumplido(){
        return this.resultado
    }
    
    
}