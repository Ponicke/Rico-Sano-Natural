export class Profesional{

    private nombre: string;
    private apellido: string;
    private especialidad: string;
    private matricula: string;

    constructor(nombre: string, apellido: string, especialidad: string, matricula: string){
        this.nombre=nombre
        this.apellido=apellido
        this.especialidad=especialidad
        this.matricula=matricula
    }

    
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
    
    
    public setespecialidad(especialidad : string) {
        this.especialidad = especialidad;
    }
    public getespecialidad() : string {
        return this.especialidad
    }

    
    public setmatricula(matricula : string) {
        this.matricula = matricula;
    }
    public getmatricula() : string {
        return this.matricula
    }
    
    
    
}
