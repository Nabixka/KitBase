import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { GroupRarityByGame } from 'src/Mapping/rarity.game.mapping';

@Injectable()
export class RarityGameService {
    constructor(private knexService: KnexService) {}

    // Game_id, value, icon
    async getAll(){
        const get = await this.knexService.connection("rarity_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "rarity_game.id",
            "game_id": "game.id",
            "game_name": "game.name",
            "icon": "rarity_game.icon",
            "value": "rarity_game.value"
        })

        return {
            message: "Berhasil Mengambil Rarity",
            data: GroupRarityByGame(get)
        }
    }

    async getByGame(id: number){
        const get = await this.knexService.connection("rarity_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "rarity_game.id",
            "game_id": "game.id",
            "game_name": "game.name",
            "icon": "rarity_game.icon",
            "value": "rarity_game.value"
        })
        .where("game.id", id)
    }
}