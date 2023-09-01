import { Bebida } from "./bebida";
import { Colacion } from "./colacion";
import { Comida } from "./comida";
import { Duracion } from "./duracion.enum";
import { Paciente } from "./paciente";
import { Profesional } from "./profesional";

export class PlanAlimenticio{
    
    private edad: number;
    private pesoActual: number;
    private medidaCintura: number;
    private duracion: Duracion;
    private paciente: Paciente;
    private profesional: Profesional;
    private comidas: Comida[]
    private colaciones: Colacion[]
    private bebidas: Bebida[]
    
    constructor(){
        this.comidas=[]
        this.colaciones=[]
        this.bebidas=[]
    }
    public setedad(edad : number) {
        this.edad = edad;
    }
    public getedad() : number {
        return this.edad
    }

    public setpesoActual(peso : number) {
        this.pesoActual = peso;
    }
    public getpesoActual() : number {
        return this.pesoActual
    }

    public setmedidaCintura(medida : number) {
        this.medidaCintura = medida;
    }
    public getmedidaCintura() : number {
        return this.medidaCintura
    }
    
    public setduracion(duracion : Duracion) {
        this.duracion = duracion;
    }
    public getduracion() : Duracion {
        return this.duracion
    }
    
    public setpaciente(paciente : Paciente) {
        this.paciente = paciente;
    }
    public getpaciente() : Paciente {
        return this.paciente
    }
    
    public setprofesional(profesional : Profesional) {
        this.profesional =profesional ;
    }
    public getprofesional() : Profesional {
        return this.profesional
    }

    public getcomidas() : Comida[]{
        return this.comidas
    }

    public getcolaciones() : Colacion[]{
        return this.colaciones
    }

    public getbebidas() : Bebida[]{
        return this.bebidas
    }
}