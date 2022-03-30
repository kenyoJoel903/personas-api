import { TelefonoDtoRequest } from "./telefono-dto.request";

export class PersonaDtoRequest {
    nombres:string;
    apellidos:string;
    fechaNacimiento:string;
    telefonos:Array<TelefonoDtoRequest>;
}