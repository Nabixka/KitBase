import { Module } from '@nestjs/common';
import { KitsTypeGameService } from './kits_type_game.service';
import { KitsTypeGameController } from './kits_type_game.controller';

@Module({
  controllers: [KitsTypeGameController],
  providers: [KitsTypeGameService],
})
export class KitsTypeGameModule {}
