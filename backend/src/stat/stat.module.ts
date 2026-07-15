import { Module } from '@nestjs/common';
import { StatService } from './stat.service';
import { StatController } from './stat.controller';
import { knexModule } from 'src/database/knexModule';

@Module({
  imports: [knexModule],
  controllers: [StatController],
  providers: [StatService],
})
export class StatModule {}
