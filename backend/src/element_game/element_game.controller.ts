import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ElementGameService } from './element_game.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ValidateElementExist } from 'src/Pipes/ValidateElementExist';

@Controller('element-game')
export class ElementGameController {
  constructor(private elementGameService: ElementGameService) {}

  @Get()
  getAll(){
    return this.elementGameService.getAll()
  }

  @Get('/game')
  getByGame(@Query('game') game: string){
    return this.elementGameService.getByGame(game)
  }

  @Post()
  @UseInterceptors(FileInterceptor('element_icon', {
    storage: diskStorage({
      destination: './uploads/element',
      filename(req, file, callback) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9 )
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}-${ext}`)
      },
    })
  }))
  createGame(@Body() data: { element_name: string, game_id: number}, @UploadedFile() file: Express.Multer.File ){
    if(!file || !data.element_name || !data.game_id) throw new BadRequestException("Isi Dengan Benar")
    
    return this.elementGameService.create({...data, element_icon: `/uploads/elements/${file.filename}`})
  }

  @Patch('/:id')
  @UseInterceptors(FileInterceptor('element_icon', {
    storage: diskStorage({
      destination: './uploads/element',
      filename(req, file, callback) {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9 )
        const ext = extname(file.originalname)
        callback(null, `${file.fieldname}-${unique}-${ext}`)
      },
    })
  }))
  updateGame(@Param('id') id: string,  @Body() data: { element_name: string, game_id: number}, @UploadedFile() file: Express.Multer.File){
    return this.elementGameService.update(Number(id), {...data, element_icon: file ? `/uploads/element/${file.filename}` : undefined})
  }

  @Delete('/:id')
  deleteGame(@Param('id', ValidateElementExist) id: string){
    return this.elementGameService.delete(Number(id))
  }
}
