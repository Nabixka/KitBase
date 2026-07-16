import { BadRequestException, Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PathService } from './path.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname } from 'path';

@Controller('path')
export class PathController {
  constructor(private pathService: PathService) {}

  @Get()
  getAll(){
    return this.pathService.getAll()
  }

  @Get('/game/:game_id')
  getByGame(@Param('game_id', ValidateGameExist) game_id: string){
    return this.pathService.getByGame(Number(game_id))
  }

  @Post('/game/:game_id')
  @UseInterceptors(FileInterceptor('icon', {
    storage: diskStorage({
      destination(req, file, callback) {
        const game = req.params.game_id || 'unknown';
        const path = `./uploads/${game}/path`
        if(!existsSync(path)){
          mkdirSync(path, {recursive: true})
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
  createPath(
    @Param('game_id', ValidateGameExist) game_id: string,
    @Body() data: { name: string },
    @UploadedFile() file: Express.Multer.File
  ){
    if(!file || !data.name || !game_id) throw new BadRequestException('Isi Dengan Benar')
    const gameId = game_id
    return this.pathService.createPath({ ...data, game_id: Number(game_id), icon: `/uploads/${gameId}/path/${file.filename}`}) 
  }
}
