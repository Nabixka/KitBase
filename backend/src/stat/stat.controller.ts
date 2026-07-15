import { Controller, Get } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stats')
export class StatController {
  constructor(private statService: StatService) {}

  @Get()
  getAll(){
    return this.statService.getAll()
  }
}
