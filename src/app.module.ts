import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasJoModule } from './journey/personas-jo/personas-jo.module';
import { PersonasBsModule } from './business/personas-bs/personas-bs.module';
import { PersonasCoModule } from './core/personas-co/personas-co.module';

@Module({
  imports: [PersonasJoModule, PersonasBsModule, PersonasCoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
