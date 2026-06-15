import { Controller, Get, Query } from '@nestjs/common';
import { ElementGameService } from './element_game.service';

@Controller('element-game')
export class ElementGameController {
  constructor(private elementGameService: ElementGameService) {}

  @Get()
  getAll(){
    return this.elementGameService.getAll()
  }

  @Get('/game')
  getByGame(@Query('game') game: string){
    return this.elementGameService.getByGame(game)
  }
}
