import { Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { PathService } from './path.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';

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

  @Post()
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
    })
  }))
  createPath(){

  }
}
