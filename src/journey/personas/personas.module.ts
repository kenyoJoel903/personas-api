import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { PersonasModule as PersonasBsModule } from 'src/business/personas/personas.module';

@Module({
  controllers: [PersonasController],
  imports: [PersonasBsModule],
  providers: [PersonasService]
})
export class PersonasModule {}
