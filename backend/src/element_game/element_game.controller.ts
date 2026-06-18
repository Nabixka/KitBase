import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ElementGameService } from './element_game.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ValidateElementExist } from 'src/Pipes/ValidateElementExist';
import { existsSync, mkdirSync } from 'fs';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';

@Controller('element')
export class ElementGameController {
  constructor(private elementGameService: ElementGameService) {}

  @Get()
  getAll(){
    return this.elementGameService.getAll()
  }

  @Get('/game/:id')
  getByGame(@Param('id', ValidateGameExist) id: string){
    return this.elementGameService.getByGame(Number(id))
  }

  @Post('/game/:game_id')
  @UseInterceptors(FileInterceptor('element_icon', {
    storage: diskStorage({
      destination(req, file, callback){
        const game = req.params.game_id || 'unknown';
        const path = `./uploads/${game}/elements`
        if (!existsSync(path)) {
        mkdirSync(path, { recursive: true });
        }
        callback(null, path);
      },
      filename(req, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9 )
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}${ext}`)
      },
    })
  }))
  createGame(
    @Param('game_id') game_id: string, 
    @Body() data: { element_name: string}, @UploadedFile() file: Express.Multer.File ){
      if(!file || !data.element_name || !game_id) throw new BadRequestException("Isi Dengan Benar")
      const gameFolder = game_id
      return this.elementGameService.create({...data, game_id: Number(gameFolder), element_icon: `/uploads/${gameFolder}/elements/${file.filename}`})
  }

  @Patch('/:id/game/:game_id')
  @UseInterceptors(FileInterceptor('element_icon', {
    storage: diskStorage({
      destination(req, file, callback){
        const game = req.params.game_id || 'unknown'
        const path = `./uploads/${game}/elements`
        if(!existsSync(path)){
          mkdirSync(path, { recursive: true })
        }
        callback(null, path)
      },
      filename(req, file, callback) {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9 )
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}${ext}`)
      },
    })
  }))
  updateGame(
    @Param('id', ValidateElementExist) id: string,  
    @Param('game_id', ValidateGameExist) game_id: string,
    @Body() data: { element_name: string }, @UploadedFile() file: Express.Multer.File){
      const gameFolder = game_id
      return this.elementGameService.update(Number(id), {...data, game_id: Number(game_id), element_icon: file ? `/uploads/${gameFolder}/elements/${file.filename}` : undefined})
  }

  @Delete('/:id')
  deleteGame(@Param('id', ValidateElementExist) id: string){
    return this.elementGameService.delete(Number(id))
  }
}
