import { Module } from '@nestjs/common';
import { knexService } from './knexService';

@Module({
  exports: [knexService],
  providers: [knexService]
})
export class knexModule {}
