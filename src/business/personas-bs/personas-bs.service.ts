import { Injectable } from '@nestjs/common';
import { Persona } from 'src/core/personas-co/models/persona.model';
import { Telefono } from 'src/core/personas-co/models/telefono.model';
import { PersonasCoService } from 'src/core/personas-co/personas-co.service';
import { PersonaDtoRequest } from 'src/models/dto/request/persona-dto.request';
import { PersonaDtoResponse } from 'src/models/dto/response/persona-dto.response';
import { TelefonoDtoResponse } from 'src/models/dto/response/telefono-dto.response';

@Injectable()
export class PersonasBsService {

    constructor(
        private personaCoService:PersonasCoService
    ) {}

    async save(data:PersonaDtoRequest):Promise<PersonaDtoResponse> {
        if(!data.telefonos) {
            data.telefonos = [];
        }
        let personaResponse:PersonaDtoResponse = new PersonaDtoResponse();
        let persona:Persona = new Persona();
        persona.apellidos = data.apellidos.toUpperCase();
        persona.nombres = data.nombres.toUpperCase();
        persona.fechaNacimiento = new Date(data.fechaNacimiento);
        persona = await this.personaCoService.savePersona(persona);
        persona.telefonos = [];
        await Promise.all(data.telefonos.map(async (tel) => {
            let _tel = new Telefono();
            _tel.telefono = tel.telefono
            _tel.persona = persona;
            persona.telefonos.push( await this.personaCoService.saveTelefono(_tel));
        }))
        
        if(persona) {
            personaResponse = new PersonaDtoResponse(persona);
        }
        return personaResponse;
    }

    async listTelefonosByPerson(idPersona:number):Promise<Array<TelefonoDtoResponse>> {
        let telefonos:Array<TelefonoDtoResponse> = [];
        let _telefonos = await this.personaCoService.findTelefonosByPersona(idPersona);
        if(_telefonos) {
            _telefonos.forEach(tel => {
                telefonos.push(new TelefonoDtoResponse(tel));
            })
        }
        return telefonos;
    }
}
