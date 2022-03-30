import { Module } from '@nestjs/common';
import { PersonasCoRepository } from './personas-co.repository';
import { PersonasCoService } from './personas-co.service';
import { TelefonosCoRepository } from './telefonos-co.repository';

@Module({
  providers: [PersonasCoService, PersonasCoRepository, TelefonosCoRepository],
  exports: [PersonasCoService]
})
export class PersonasCoModule {}
