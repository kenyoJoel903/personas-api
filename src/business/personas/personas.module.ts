import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasService as PersonaCoreService } from 'src/core/personas/personas.service';
@Module({
  providers: [PersonasService, PersonaCoreService]
})
export class PersonasModule {}
