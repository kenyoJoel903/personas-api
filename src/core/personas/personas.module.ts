import { Module } from '@nestjs/common';
import { PersonaRepository } from './personas.repository';
import { PersonasService } from './personas.service';

@Module({
  providers: [PersonasService, PersonaRepository],
  exports: [PersonasService]
})
export class PersonasModule {}
