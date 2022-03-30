export class Telefono {
    id:number;
    telefono:string;
    estado:boolean;
    idPersona:number;

    constructor(data?:any) {
        if(data) {
            this.id = data.id;
            this.telefono = data.telefono;
            this.estado = data.estado;
            this.idPersona = data.persona_id;
        }
    }
}