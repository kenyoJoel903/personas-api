import { Injectable } from '@nestjs/common';
import { PersonasService as PersonaCoreService } from 'src/core/personas/personas.service';
import { Persona } from 'src/models/domain/persona';

@Injectable()
export class PersonasService {

    constructor(
        private personaCoreService:PersonaCoreService
    ) {}

    async save(data:Persona):Promise<Persona> {
        return await this.personaCoreService.save(data);
    }
}
