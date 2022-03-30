import { Injectable } from '@nestjs/common';
import { PersonasCoService } from 'src/core/personas-co/personas-co.service';
import { Persona } from 'src/models/domain/persona';
import { Telefono } from 'src/models/domain/telefono';
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
        persona.telefonos = [];
        data.telefonos.forEach(tel => {
            persona.telefonos.push(new Telefono(tel));
        })
        persona = await this.personaCoService.save(persona);
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
