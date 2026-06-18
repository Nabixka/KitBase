import { BadRequestException, Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { RarityGameService } from './rarity_game.service';
import { ValidateRarityExist } from 'src/Pipes/ValidateRarityExists';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Controller('rarity')
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

  @Post('game/:game_id')
  @UseInterceptors(FileInterceptor('icon', {
    storage: diskStorage({
      destination(req, file, callback) {
        const game = req.params.game_id || 'unknown'
        const path = `/uploads/${game}/raritys`
        if(!existsSync(path)){
          mkdirSync(path, { recursive: true })
        }
        callback(null, path)
      },
      filename(req, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}${ext}`)
      },
    })
  }))
  createRarity(@Param('game_id', ValidateGameExist) game_id: string, @Body() data: { value: string }, @UploadedFile() file: Express.Multer.File){
    if(!data || !game_id || !file ) throw new BadRequestException("Isi Yang Benar")
    const gameId = Number(game_id)
    return this.rarityGameService.create({...data, game_id: gameId, icon: `/uploads/${gameId}/raritys/${file.filename}` })
  }

  @Delete('/:id')
  deleteRarity(@Param('id', ValidateRarityExist) id: string){
    return this.rarityGameService.delete(Number(id))
  }
}
