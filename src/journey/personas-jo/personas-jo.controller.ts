import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonaDtoRequest } from 'src/models/dto/request/persona-dto.request';
import { PersonaDtoResponse } from 'src/models/dto/response/persona-dto.response';
import { PersonasJoService } from './personas-jo.service';

@Controller('api/personas')
export class PersonasJoController {

    constructor(
        private personasJoService: PersonasJoService
    ) { }

    @Get()
    getHello(): string {
        return "HOLA";
    }

    @Post("/")
    async save(@Body() persona: PersonaDtoRequest): Promise<PersonaDtoResponse> {
        return await this.personasJoService.save(persona);
    }

    @Get("/list-phones/:idPersona")
    async listPhones(@Param('idPersona') idPersona:number) {
        return await this.personasJoService.listTelefonosByPerson(idPersona);
    }
}
