import { Module } from '@nestjs/common';
import { KnexService } from './knexService';

@Module({
  exports: [KnexService],
  providers: [KnexService]
})
export class knexModule {}
