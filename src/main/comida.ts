import { Composicion } from "./composicion";
import { TipoComida } from "./tipoComida.enum";

export class Comida{

    private tipoComida: TipoComida;
    private descripcion: string;
    private composiciones: Composicion[]

    constructor(){
        this.composiciones=[]
    }

    
    public settipoComida(tipoComida : TipoComida) {
        this.tipoComida = tipoComida;
    }
    public gettipoComida() : TipoComida {
        return this.tipoComida
    }
    
    
    public setdescripcion(descripcion : string) {
        this.descripcion = descripcion;
    }
    public getdescripcion() : string {
        return this.descripcion
    }
    
    public getcomposiciones() : Composicion[]{
        return this.composiciones
    }
    
    
}