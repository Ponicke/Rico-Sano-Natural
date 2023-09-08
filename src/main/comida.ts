import { Composicion } from "./composicion";
import { TipoComida } from "./tipoComida.enum";
import { TipoComposicion } from "./tipoComposicion.enum";

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
    public porcentajeDeProteinas(): number{
        const comidasProteicas = this.composiciones.filter((composicion)=> composicion.gettipoComposiciones() == TipoComposicion.PROTEINAS)
        var porcentajeProteico= 0
        comidasProteicas.forEach(composicion =>{
        porcentajeProteico += composicion.getporcentajes()
        })
        return porcentajeProteico
    }
}