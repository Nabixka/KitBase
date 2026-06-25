import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { GroupKits } from 'src/Mapping/kits.mapping';

@Injectable()
export class KitsService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection("kits")
        .leftJoin("stats_game", "stats_game.id", "kits.stats_id")
        .leftJoin("kits_type_game", "kits_type_game.id", "kits.kits_type_game_id")
        .select({
            "id" : "kits.id",
            "name" : "kits.name",
            "description" : "kits.description",
            "cooldown" : "kits.cooldown",
            "image_vidio" : "kits.image_vidio",
            "icon" : "kits.icon",
            "target" : "kits.target",
            
            "stats_id" : "stats_game.id",
            "stats_name" : "stats_game.stat_name",
            "stats_icon" : "stats_game.icon",
            
            "kits_type_id" : "kits_type_game.id",
            "kits_type_name" : "kits_type_game.kits_type_name" 
        })

        return {
            message : "Berhasil Mengambil Semua Kits",
            data: get.map(GroupKits)
        }
    }

}