
import { Injectable } from '@nestjs/common';
import { Persona } from "src/models/domain/persona";
import { env } from 'process';
import { Pool } from 'pg';

@Injectable()
export class PersonaRepository {

    private clientDb:any;

    constructor() {
        const urlDataBase = `postgres://${env.TRANZFER_DB_USER}:${env.TRANZFER_DB_PASSWORD}@${env.TRANZFER_DB_HOST}:5432/${env.TRANZFER_DB}`;
        this.clientDb = new Pool({
            max: 20,
            connectionString: urlDataBase,
            idleTimeoutMillis: 30000
        })
    }

    async save(data:Persona):Promise<Persona> {
        const client = await this.clientDb.connect();
        const result = await client.query(`insert into public.persona (nombres, apellidos, fecha_nacimiento, estado) 
        values ($1, $2, $3, $4)`, [data.nombre, data.apellido, data.fechaNacimiento, data.estado]);
        client.release();
        console.log(result);
        return data;
    }
}