import { Injectable } from '@nestjs/common';
import { Persona } from "src/models/domain/persona";
import { env } from 'process';
import { Pool } from 'pg';

@Injectable()
export class PersonasCoRepository {

    private clientDb:any;

    constructor() {
        console.log(env.TRANZFER_DB_HOST);
        const urlDataBase = `postgres://${env.TRANZFER_DB_USER}:${env.TRANZFER_DB_PASSWORD}@${env.TRANZFER_DB_HOST}:5432/${env.TRANZFER_DB}`;
        console.log(urlDataBase);
        this.clientDb = new Pool({
            max: 20,
            connectionString: urlDataBase,
            idleTimeoutMillis: 30000
        })
    }

    async save(data:Persona):Promise<Persona> {
       try {
        const client = await this.clientDb.connect();
        const result = await client.query(`insert into public.persona (nombres, apellidos, fecha_nacimiento, estado) 
        values ($1, $2, $3, $4) RETURNING *`, [data.nombres, data.apellidos, data.fechaNacimiento, data.estado]);
        client.release();
        data = new Persona(result.rows[0]);
       } catch (error) {
           data = null;
           console.log('error', error);
       }
        return data;
    }

}