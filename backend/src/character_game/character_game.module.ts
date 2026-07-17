import { Module } from '@nestjs/common';
import { CharacterGameService } from './character_game.service';
import { CharacterGameController } from './character_game.controller';
import { knexModule } from 'src/database/knexModule';

@Module({
  imports: [knexModule],
  controllers: [CharacterGameController],
  providers: [CharacterGameService],
})
export class CharacterGameModule {}
