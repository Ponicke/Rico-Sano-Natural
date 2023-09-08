import { Bebida } from "./bebida";
import { CalificacionPlan } from "./calificacionPlan.enum";
import { Colacion } from "./colacion";
import { Comida } from "./comida";
import { Duracion } from "./duracion.enum";
import { Objetivo } from "./objetivo";
import { Paciente } from "./paciente";
import { Profesional } from "./profesional";
import { TipoComida } from "./tipoComida.enum";

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
    private objetivos: Objetivo[]
    
    constructor(){
        this.comidas=[]
        this.colaciones=[]
        this.bebidas=[]
        this.objetivos=[]
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
    public getresultado(): Objetivo[]{
        return this.objetivos
    }
    public calcularResultado(): CalificacionPlan{
        let cantidadObjetivos= this.cantidadObjetivos()
        let cantidadDeObjetivosCumplidos= this.objetivos.filter((objetivos) => objetivos.cumplido()).length
        let porcentaje= (cantidadDeObjetivosCumplidos/cantidadObjetivos)*100
        if (porcentaje== 100){
            return CalificacionPlan.EXCELENTE
        }
        else if(porcentaje>60){
            return CalificacionPlan.MUY_BUENA
        }
        else if(porcentaje>50){
            return CalificacionPlan.BUENA
        }
        else {
            return CalificacionPlan.REGULAR
        }
    }
    public cantidadObjetivos(): number{
        return this.objetivos.length
    }
    public agregarObjetivo(objetivo: Objetivo): void{
        this.objetivos.push(objetivo)
    }
    //public cantidadDeComidas(): Comida[]{

    public cantidadComida(): number{
        return this.comidas.length
    }
    public agregarComida(comida: Comida): void{
        this.comidas.push(comida)
    }

    public comidasSegunTipo(tipo1: TipoComida, tipo2: TipoComida) {
        return this.comidas.filter((comida)=> comida.gettipoComida()== tipo1 || comida.gettipoComida()== tipo2);
    }

    public cantidadDeComidasSegunTipo(tipo1: TipoComida, tipo2: TipoComida){
        return this.comidasSegunTipo(tipo1, tipo2).length
     }

    public fuerteProteina(){
        const comidaAC= this.comidasSegunTipo(TipoComida.ALMUERZO, TipoComida.CENA)
        var porcentajeTotal= 0
        comidaAC.forEach(comida => {
            porcentajeTotal += comida.porcentajeDeProteinas()
        });
        var promedioProteico= porcentajeTotal/comidaAC.length
        return promedioProteico>=50
    }
    
}
    