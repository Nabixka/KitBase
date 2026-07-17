import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { ElementGameModule } from './element_game/element_game.module';
import { RarityGameModule } from './rarity_game/rarity_game.module';
import { StatsGameModule } from './stats_game/stats_game.module';
import { KitsTypeGameModule } from './kits_type_game/kits_type_game.module';
import { KitsModule } from './kits/kits.module';
import { CharactersModule } from './characters/characters.module';
import { StatModule } from './stat/stat.module';
import { PathModule } from './path/path.module';
import { CharacterGameModule } from './character_game/character_game.module';

@Module({
  imports: [GameModule, ElementGameModule, RarityGameModule, StatsGameModule, KitsTypeGameModule, KitsModule, CharactersModule, StatModule, PathModule, CharacterGameModule]
})
export class AppModule {}
