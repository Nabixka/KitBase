import { Module } from '@nestjs/common';
import { PathService } from './path.service';
import { PathController } from './path.controller';
import { knexModule } from 'src/database/knexModule';

@Module({
  imports: [knexModule],
  controllers: [PathController],
  providers: [PathService],
})
export class PathModule {}
