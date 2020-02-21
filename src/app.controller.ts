import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { InternalWithOptionalParamsDto } from './dtos/with-optional-param-dtos.dto';
import { nest } from 'regression-external-dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('internal-dto')
  getHello(@Query() withOptionalParamsDto: InternalWithOptionalParamsDto): string {
    return this.appService.getHello();
  }

  @Get('external-dto')
  getHelloWithExternalDto(@Query() withOptionalParamsDto: nest.PaginationOptionsDto): string {
    return this.appService.getHello();
  }
}
