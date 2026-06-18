import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { ElementGameModule } from './element_game/element_game.module';
import { RarityGameModule } from './rarity_game/rarity_game.module';
import { StatsGameModule } from './stats_game/stats_game.module';

@Module({
  imports: [GameModule, ElementGameModule, RarityGameModule, StatsGameModule]
})
export class AppModule {}
