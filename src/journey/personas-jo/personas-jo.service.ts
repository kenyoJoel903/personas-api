import { Injectable } from '@nestjs/common';
import { PersonasBsService } from 'src/business/personas-bs/personas-bs.service';
import { PersonaDtoRequest } from 'src/models/dto/request/persona-dto.request';
import { PersonaDtoResponse } from 'src/models/dto/response/persona-dto.response';
import { TelefonoDtoResponse } from 'src/models/dto/response/telefono-dto.response';

@Injectable()
export class PersonasJoService {

    constructor(
       private personasBsService:PersonasBsService 
    ){}

    async save(data:PersonaDtoRequest):Promise<PersonaDtoResponse> {
        return await this.personasBsService.save(data);
    }

    async listTelefonosByPerson(idPersona:number):Promise<Array<TelefonoDtoResponse>> {
        return await this.personasBsService.listTelefonosByPerson(idPersona);
    }
}
