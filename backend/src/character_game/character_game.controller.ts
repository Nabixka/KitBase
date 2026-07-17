import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CharacterGameService } from './character_game.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { ValidateCharacterExist } from 'src/Pipes/ValidateCharacterExist';

@Controller('character-game')
export class CharacterGameController {
  constructor(private characterGameService: CharacterGameService) {}

  @Get()
  getAll(){
    return this.characterGameService.getAll()
  }

  @Post('/game/:game_id')
  create(@Param('game_id', ValidateGameExist) game_id: string, @Body('character_id', ValidateCharacterExist) character_id: string){
    const gameId = Number(game_id)
    const characterId = Number(character_id)
    if(!gameId || !characterId) throw new BadRequestException("Isi Yang Benar")
    return this.characterGameService.create({game_id: gameId, character_id: characterId})
  }

  @Delete('/:id')
  delete(@Param('id') id: string){
    return this.characterGameService.delete(Number(id))
  }
}
