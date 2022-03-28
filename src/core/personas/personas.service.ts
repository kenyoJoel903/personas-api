import { Injectable } from '@nestjs/common';
import { Persona } from 'src/models/domain/persona';
import { PersonaRepository } from './personas.repository';

@Injectable()
export class PersonasService {


    constructor(
        private personaRepository:PersonaRepository
    ) {}

    async save(data:Persona):Promise<Persona> {
        return await this.personaRepository.save(data);
    }
}
