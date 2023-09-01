import { Sexo } from "./sexo.enum";

export class Paciente{

    private nombre: string;
    private apellido: string;
    private fdeNacimiento: Date;
    private sexo: Sexo;
    private disciplina: string;

    public setnombre(nombre : string) {
        this.nombre = nombre;
    }
    public getnombre() : string {
        return this.nombre 
    }

    public setapellido(apellido : string) {
        this.apellido = apellido;
    }
    public getapellido() : string {
        return this.apellido
    }

    public setfdeNacimiento(fecha : Date) {
        this.fdeNacimiento = fecha;
    }
    public getfdeNacimiento() : Date {
        return this.fdeNacimiento
    }

    public setsexo(sexo : Sexo) {
        this.sexo = sexo;
    }
    public getsexo() : Sexo {
        return this.sexo
    }

    public setdisciplina(disciplina : string) {
        this.disciplina = disciplina;
    }
    public getdisciplina() : string {
        return this.disciplina
    }
}