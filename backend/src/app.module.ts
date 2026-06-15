import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { ElementGameModule } from './element_game/element_game.module';

@Module({
  imports: [GameModule, ElementGameModule]
})
export class AppModule {}
