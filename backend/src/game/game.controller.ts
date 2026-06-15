import { BadRequestException, Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GameService } from './game.service';
import { ValidateGameExist } from 'src/Pipes/ValidateGameExist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get('/')
  getAll(){
    return this.gameService.getAll()
  }

  @Get('/:id')
  getOne(@Param('id', ValidateGameExist) id: string){
    return this.gameService.getOne(Number(id))
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: "./uploads/game",
      filename(req, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}-${ext}`)
      },
    })
  }))
  create(@Body() data: { name: string}, @UploadedFile() file: Express.Multer.File){
    if(!file || !data.name ) throw new BadRequestException("Isi Data Dengan Benar")
    return this.gameService.create({...data, image: `/uploads/game/${file.filename}`})
  }

  @Delete('/:id')
  delete(@Param('id', ValidateGameExist) id: string){
    return this.gameService.delete(Number(id))
  }
}
