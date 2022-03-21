import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule as PersonasJoModule } from './journey/personas/personas.module';

@Module({
  imports: [PersonasJoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
