import { Module } from '@nestjs/common';
import { databaseModule } from './database/database.module';

@Module({
  imports: [databaseModule]
})
export class AppModule {}
