import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { StatsGameService } from './stats_game.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { ValidateStatExist } from 'src/Pipes/ValidateStatExist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';

@Controller('stats')
export class StatsGameController {
  constructor(private statsGameService: StatsGameService) {}

  @Get()
  getAll(){
    return this.statsGameService.getAll()
  }

  @Get("/game/:game_id")
  getByGame(@Param('game_id', ValidateGameExist) game_id: string){
    return this.statsGameService.getByGame(Number(game_id))
  }

  @Post("/game/:game_id")
  @UseInterceptors(FileInterceptor('icon', {
      storage: diskStorage({
        destination(req, file, callback) {
          const game = req.params.game_id || 'unknown'
          const path = `./uploads/${game}/stats_icon`
          if(!existsSync){
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
  create(
    @Param('game_id', ValidateGameExist) game_id: string,
    @Body() data: { stat_name: string},
    @UploadedFile() file: Express.Multer.File){
      if(!file || !data || !game_id) throw new BadRequestException("Isi Yang Benar")
      return this.statsGameService.createStat({...data, game_id: Number(game_id), icon: `/uploads/${game_id}/stats_icon/${file.filename}` })
  }

  @Patch('/:id/game/:game_id')
  @UseInterceptors(FileInterceptor('icon', {
    storage: diskStorage({
      destination(req, file, callback) {
        const game = req.params.game_id || 'unknown'
        const path = `./uploads/${game}/stats_icon`
        callback(null, path)
      },
      filename(req, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}${ext}`)
      },
    })
  }))
  update(
    @Param('id', ValidateStatExist) id: string,
    @Param('game_id', ValidateGameExist) game_id: string,
    @Body() data: { stat_name: string },
    @UploadedFile() file: Express.Multer.File
  ){
    const gameId = Number(game_id)
    return this.statsGameService.updateStat(Number(id), {...data, game_id: gameId, icon: file ? `/uploads/${gameId}/stats_icon/${file.filename}` : undefined})
  }

  @Delete("/:id")
  delete(@Param('id', ValidateStatExist) id: string){
    return this.statsGameService.deleteStat(Number(id))
  }
}
