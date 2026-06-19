import { Controller } from '@nestjs/common';
import { KitsTypeGameService } from './kits_type_game.service';

@Controller('kits-type-game')
export class KitsTypeGameController {
  constructor(private readonly kitsTypeGameService: KitsTypeGameService) {}
}
