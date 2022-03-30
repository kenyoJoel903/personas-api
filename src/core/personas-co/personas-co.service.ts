import { Injectable } from '@nestjs/common';
import { Persona } from 'src/models/domain/persona';
import { Telefono } from 'src/models/domain/telefono';
import { PersonasCoRepository } from './personas-co.repository';
import { TelefonosCoRepository } from './telefonos-co.repository';

@Injectable()
export class PersonasCoService {

    constructor(
        private personaRepository:PersonasCoRepository,
        private telefonoRepository:TelefonosCoRepository
    ) {}

    async save(data:Persona):Promise<Persona> {
        data.estado = true;
        let persona:Persona = await this.personaRepository.save(data);
        if(persona) {
            persona.telefonos = [];
            data.telefonos.forEach(async (tel:Telefono) => {
                tel.idPersona = persona.id;
                tel.estado = true;
                const telefono = await this.telefonoRepository.save(tel);
                if(telefono) {
                    persona.telefonos.push(telefono);
                }
            })
        }
        return persona;
    }

    async findTelefonosByPersona(idPersona:number):Promise<Array<Telefono>> {
        return await this.telefonoRepository.findByPesona(idPersona);
    }
}
