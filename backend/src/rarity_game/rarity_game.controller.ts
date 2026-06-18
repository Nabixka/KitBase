import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RarityGameService } from './rarity_game.service';
import { ValidateRarityExist } from 'src/Pipes/ValidateRarityExists';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';

@Controller('rarity-game')
export class RarityGameController {
  constructor(private rarityGameService: RarityGameService) {}

  @Get()
  getAll(){
    return this.rarityGameService.getAll()
  }

  @Get('/:id')
  getByGame(@Param('id', ValidateGameExist) id: string){
    return this.rarityGameService.getByGame(Number(id))
  }

  @Delete('/:id')
  deleteRarity(@Param('id', ValidateRarityExist) id: string){
    return this.rarityGameService.delete(Number(id))
  }
}
