import { Injectable } from '@nestjs/common';
import { PersonasService as PersonasBsService } from 'src/business/personas/personas.service';
import { Persona } from 'src/models/domain/persona';

@Injectable()
export class PersonasService {

    constructor(
        private personaBsService:PersonasBsService
    ){}

    async save(data:Persona):Promise<Persona> {
        return await this.personaBsService.save(data);
    }
}
