export class TelefonoDtoResponse {
    id:number;
    telefono:string;

    constructor(data:any) {
        if(data) {
            this.id = data.id;
            this.telefono = data.telefono;
        }
    }
}