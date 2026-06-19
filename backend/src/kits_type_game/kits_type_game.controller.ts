import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { KitsTypeGameService } from './kits_type_game.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';

@Controller('kits-type')
export class KitsTypeGameController {
  constructor(private kitsTypeGameService: KitsTypeGameService) {}

  @Get()
  getAll(){
    return this.kitsTypeGameService.getAll()
  }

  @Get('/game/:game_id')
  getByGame(@Param('game_id', ValidateGameExist) game_id: string){
    return this.kitsTypeGameService.getByGame(Number(game_id))
  }

  @Post()
  createKits(){

  }

  @Delete('/:id')
  deleteKits(@Param('id') id: string){
    return this.kitsTypeGameService.deleteKits(Number(id))
  }
}
