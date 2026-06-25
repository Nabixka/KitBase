import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { knexModule } from 'src/database/knexModule';

@Module({
  imports: [knexModule],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
