import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StatService } from './stat.service';
import { ValidateSameStat, ValidateStatExist } from 'src/Pipes/ValidateStatExist';

@Controller('stats')
export class StatController {
  constructor(private statService: StatService) {}

  @Get()
  getAll(){
    return this.statService.getAll()
  }

  @Get('/:id')
  getById(@Param('id') id: string){
    return this.statService.getById(Number(id))
  }

  @Post()
  create(@Body('stat_name', ValidateSameStat) stat_name: string){
    return this.statService.create({stat_name})
  }

  @Put('/:id')
  update(@Param('id', ValidateStatExist) id: string, @Body('stat_name', ValidateSameStat) stat_name: string){
    return this.statService.update(Number(id), {stat_name})
  }

  @Delete('/:id')
  delete(@Param('id', ValidateStatExist) id: string){
    return this.statService.delete(Number(id))
  }
}
