import { TipoComposicion } from "./tipoComposicion.enum";

export class Composicion{

    private tipoComposiciones: TipoComposicion
    private nombre: string;
    private porcentajes: number;

    
    public settipoComposiciones(tipoComposicion : TipoComposicion) {
        this.tipoComposiciones = tipoComposicion;
    }
    public gettipoComposiciones() : TipoComposicion {
        return this.tipoComposiciones
    }
    
    public setnombre(nombre : string) {
        this.nombre = nombre;
    }
    public getnombre() : string {
        return this.nombre
    }
    
    public setporcentajes(porcentaje : number) {
        this.porcentajes = porcentaje;
    }
    public getporcentajes() : number {
        return this.porcentajes
    }
    
    
}