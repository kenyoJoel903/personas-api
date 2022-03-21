import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { PersonasService as PersonasBsService } from 'src/business/personas/personas.service';

@Module({
  controllers: [PersonasController],
  providers: [PersonasService, PersonasBsService]
})
export class PersonasModule {}
