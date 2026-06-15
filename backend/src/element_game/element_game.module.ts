import { Module } from '@nestjs/common';
import { ElementGameService } from './element_game.service';
import { ElementGameController } from './element_game.controller';
import { knexModule } from 'src/database/knexModule';

@Module({
  imports: [knexModule],
  controllers: [ElementGameController],
  providers: [ElementGameService],
})
export class ElementGameModule {}
