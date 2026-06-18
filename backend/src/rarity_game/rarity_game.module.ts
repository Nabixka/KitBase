import { Module } from '@nestjs/common';
import { RarityGameService } from './rarity_game.service';
import { knexModule } from 'src/database/knexModule';
import { RarityGameController } from './rarity_game.controller';

@Module({
  imports: [knexModule],
  controllers: [RarityGameController],
  providers: [RarityGameService],
})
export class RarityGameModule {}
