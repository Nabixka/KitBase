import { Controller, Get, Param } from '@nestjs/common';
import { RarityGameService } from './rarity_game.service';

@Controller('rarity-game')
export class RarityGameController {
  constructor(private rarityGameService: RarityGameService) {}

  @Get()
  getAll(){
    return this.rarityGameService.getAll()
  }

  @Get('/:id')
  getByGame(@Param('id') id: string){
    return this.rarityGameService.getByGame(Number(id))
  }
}
