import { Module } from '@nestjs/common';
import { StatsGameService } from './stats_game.service';
import { StatsGameController } from './stats_game.controller';
import { knexModule } from 'src/database/knexModule';

@Module({
  imports: [knexModule],
  controllers: [StatsGameController],
  providers: [StatsGameService],
})
export class StatsGameModule {}
