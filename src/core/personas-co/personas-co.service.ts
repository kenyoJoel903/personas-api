import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Persona } from './models/persona.model';
import { Telefono } from './models/telefono.model';

@Injectable()
export class PersonasCoService {

    constructor(
        @InjectModel(Persona)
        private personaRepository:typeof Persona,
        @InjectModel(Telefono)
        private telefonoRepository:typeof Telefono
    ) {}

    async savePersona(data:Persona):Promise<Persona> {
        return this.personaRepository.create({
            nombres: data.nombres,
            apellidos: data.apellidos,
            fechaNacimiento: data.fechaNacimiento,
            estado: true
        });
    }

    async saveTelefono(data:Telefono):Promise<Telefono> {
        return this.telefonoRepository.create({
            telefono: data.telefono,
            estado: true,
            personaId: data.persona.id
        });
    }

    async findTelefonosByPersona(idPersona:number):Promise<Array<Telefono>> {
        return await this.telefonoRepository.findAll({
            where: {
                personaId: idPersona
            }
        });
    }
}
