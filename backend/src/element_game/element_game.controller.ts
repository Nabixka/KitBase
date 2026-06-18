import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ElementGameService } from './element_game.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ValidateElementExist } from 'src/Pipes/ValidateElementExist';
import { existsSync, mkdirSync } from 'fs';

@Controller('element-game')
export class ElementGameController {
  constructor(private elementGameService: ElementGameService) {}

  @Get()
  getAll(){
    return this.elementGameService.getAll()
  }

  @Get('/game')
  getByGame(@Param('game') id: string){
    return this.elementGameService.getByGame(Number(id))
  }

  @Post()
  @UseInterceptors(FileInterceptor('element_icon', {
    storage: diskStorage({
      destination(req, file, callback){
        const game = req.body.game_name || req.body.game_id || 'unknown';
        const path = `./uploads/${game}/element`
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
  createGame(@Body() data: { element_name: string, game_id: number}, @UploadedFile() file: Express.Multer.File ){
    console.log(data, file)
    if(!file || !data.element_name || !data.game_id) throw new BadRequestException("Isi Dengan Benar")
    const gameFolder = data.game_id
    return this.elementGameService.create({...data, element_icon: `/uploads/${gameFolder}/elements/${file.filename}`})
  }

  @Patch('/:id')
  @UseInterceptors(FileInterceptor('element_icon', {
    storage: diskStorage({
      destination(req, file, callback){
        const game = req.body.game_id || req.body.game_name || 'unknown'
        const path = `/uploads/${game}/elements`
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
  updateGame(@Param('id') id: string,  @Body() data: { element_name: string, game_id: number}, @UploadedFile() file: Express.Multer.File){
    const gameFolder = data.game_id
    return this.elementGameService.update(Number(id), {...data, element_icon: file ? `/uploads/${gameFolder}/elements/${file.filename}` : undefined})
  }

  @Delete('/:id')
  deleteGame(@Param('id', ValidateElementExist) id: string){
    return this.elementGameService.delete(Number(id))
  }
}
