import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { InternalWithOptionalParamsDto } from './dtos/with-optional-param-dtos.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() withOptionalParamsDto: InternalWithOptionalParamsDto): string {
    return this.appService.getHello();
  }
}
