import { Controller, Get } from '@nestjs/common';
import { StatsGameService } from './stats_game.service';

@Controller('stats')
export class StatsGameController {
  constructor(private statsGameService: StatsGameService) {}

  @Get()
  getAll(){
    return this.statsGameService.getAll()
  }
}
