import { Telefono } from "./telefono";

export class Persona {
    id:number;
    nombres:string;
    apellidos:string;
    fechaNacimiento:Date;
    estado:boolean;
    telefonos:Array<Telefono>;

    constructor(data?:any) {
        if(data) {
            this.id = data.id;
            this.nombres = data.nombres;
            this.apellidos = data.apellidos;
            this.fechaNacimiento = data.fecha_nacimiento;
            this.estado = data.estado;
        }
    }
}