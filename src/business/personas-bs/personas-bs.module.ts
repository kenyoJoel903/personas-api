import { Module } from '@nestjs/common';
import { PersonasCoModule } from 'src/core/personas-co/personas-co.module';
import { PersonasBsService } from './personas-bs.service';

@Module({
  providers: [PersonasBsService],
  imports: [PersonasCoModule],
  exports: [PersonasBsService]
})
export class PersonasBsModule {}
