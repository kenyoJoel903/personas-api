import { Controller, Get } from '@nestjs/common';

@Controller('api/personas')
export class PersonasController {

    @Get()
    getHello(): string {
      return "HOLA";
    }

}
