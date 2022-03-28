import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasModule as PersonasCoreModule } from 'src/core/personas/personas.module';
@Module({
  providers: [PersonasService],
  imports: [PersonasCoreModule],
  exports: [PersonasService]
})
export class PersonasModule {}
