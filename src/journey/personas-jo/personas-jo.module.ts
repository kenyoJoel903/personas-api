import { Module } from '@nestjs/common';
import { PersonasBsModule } from 'src/business/personas-bs/personas-bs.module';
import { PersonasJoController } from './personas-jo.controller';
import { PersonasJoService } from './personas-jo.service';

@Module({
  controllers: [PersonasJoController],
  providers: [PersonasJoService],
  imports: [PersonasBsModule]
})
export class PersonasJoModule {}
