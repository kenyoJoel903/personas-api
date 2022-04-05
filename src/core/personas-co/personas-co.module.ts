import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { env } from 'process';
import { Persona } from './models/persona.model';
import { Telefono } from './models/telefono.model';
import { PersonasCoService } from './personas-co.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: env.TRANZFER_DB_HOST,
      port: 5432,
      username: env.TRANZFER_DB_USER,
      password: env.TRANZFER_DB_PASSWORD,
      database: env.TRANZFER_DB,
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Persona, Telefono])
  ],
  providers: [PersonasCoService],
  exports: [PersonasCoService]
})
export class PersonasCoModule {}
