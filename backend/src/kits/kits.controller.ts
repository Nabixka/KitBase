import { Controller, Get } from '@nestjs/common';
import { KitsService } from './kits.service';

@Controller('kits')
export class KitsController {
  constructor(private kitsService: KitsService) {}

  @Get()
  getAll(){
    return this.kitsService.getAll()
  }
}
