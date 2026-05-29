import { Module } from '@nestjs/common';
import { databaseService } from './database.service';

@Module({
  exports: [databaseService],
  providers: [databaseService],
})
export class AppModule {}
