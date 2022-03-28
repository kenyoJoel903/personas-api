import { Body, Controller, Get, Post } from '@nestjs/common';
import { Persona } from 'src/models/domain/persona';
import { PersonasService } from './personas.service';

@Controller('api/personas')
export class PersonasController {

  constructor(
    private personaService:PersonasService
  ) {}

    @Get()
    getHello(): string {
      return "HOLA";
    }

    /*@Post("/")
    async save(@Body() persona:Persona):Promise<Persona> {
      return await this.personaService.save(persona);
    }*/

}
