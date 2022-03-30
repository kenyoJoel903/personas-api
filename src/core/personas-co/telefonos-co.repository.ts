import { Injectable } from '@nestjs/common';
import { Persona } from "src/models/domain/persona";
import { env } from 'process';
import { Pool } from 'pg';
import { Telefono } from 'src/models/domain/telefono';

@Injectable()
export class TelefonosCoRepository {

    private clientDb:any;

    constructor() {
        const urlDataBase = `postgres://${env.TRANZFER_DB_USER}:${env.TRANZFER_DB_PASSWORD}@${env.TRANZFER_DB_HOST}:5432/${env.TRANZFER_DB}`;
        this.clientDb = new Pool({
            max: 20,
            connectionString: urlDataBase,
            idleTimeoutMillis: 30000
        })
    }

    async save(data:Telefono):Promise<Telefono> {
       try {
        const client = await this.clientDb.connect();
        const result = await client.query(`insert into public.telefono (telefono, estado, persona_id) 
        values ($1, $2, $3) RETURNING *`, [data.telefono, data.estado, data.idPersona]);
        client.release();
        data = new Telefono(result.rows[0]);
       } catch (error) {
           data = null;
           console.log('error', error);
       }
        return data;
    }

    async findByPesona(idPersona:number):Promise<Array<Telefono>> {
        let telefonos:Array<Telefono> = [];
        try {
            const client = await this.clientDb.connect();
            const result = await client.query(`SELECT id, telefono, estado, persona_id FROM PUBLIC.TELEFONO where persona_id = $1`, [idPersona]);
            client.release();
            result.rows.forEach(tel => {
                telefonos.push(new Telefono(tel))
            })
        } catch (error) {
            telefonos = null;
            console.log('error', error);
        }
        return telefonos;
    }

}