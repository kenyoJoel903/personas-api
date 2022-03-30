import { TelefonoDtoResponse } from "./telefono-dto.response";

export class PersonaDtoResponse {
    id:number;
    nombres:string;
    apellidos:string;
    fechaNacimiento:string;
    telefonos:Array<TelefonoDtoResponse>;

    constructor(data?:any) {
        if(data) {
            this.id = data.id;
            this.nombres = data.nombres;
            this.apellidos = data.apellidos;
            this.fechaNacimiento = data.fechaNacimiento;
            this.telefonos = [];
            if(data.telefonos) {
                data.telefonos.forEach(tel => {
                    this.telefonos.push(new TelefonoDtoResponse(tel))
                });    
            }
        }
    }
    
}