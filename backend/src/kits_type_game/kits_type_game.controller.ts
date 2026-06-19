import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { KitsTypeGameService } from './kits_type_game.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { ValidateKitsTypeExist } from 'src/Pipes/ValidateKitsTypeExist';

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

  @Post('/game/:game_id')
  createKits(@Param('game_id', ValidateGameExist) game_id: string, @Body() data: { kits_type_name: string }){
    if(!game_id || !data.kits_type_name) throw new BadRequestException("Isi Data Dengan Benar")
    return this.kitsTypeGameService.createKits({...data, game_id: Number(game_id) })
  }

  @Put('/:id/game/:game_id')
  updateKits(
    @Param('id', ValidateKitsTypeExist) id: string,
    @Param('game_id', ValidateGameExist) game_id: string,
    @Body() data: { kits_type_name: string }
  ){
    return this.kitsTypeGameService.updateKits(Number(id), {...data, game_id: Number(game_id)})
  }

  @Delete('/:id')
  deleteKits(@Param('id') id: string){
    return this.kitsTypeGameService.deleteKits(Number(id))
  }
}
