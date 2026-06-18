import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { GroupStatsByGame, StatsByGame } from 'src/Mapping/stats.game.mapping';

@Injectable()
export class StatsGameService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection("stats_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "stats_game.id",
            "stat_name": "stats_game.stat_name",
            "value": "stats_game.value",
            "game_id": "game.id",
            "game_name": "game.name"
        })

        return {
            message: "Berhasil Mendapatkan Stats",
            data: GroupStatsByGame(get)
        }
    }

    async getByGame(game_id: number){
        const get = await this.knexService.connection()
        .join("game", "game.id", "game_id")
        .select({
            "id": "stats_game.id",
            "stat_name": "stats_game.stat_name",
            "value": "stats_game.value",
            "game_id": "game.id",
            "game_name": "game.name"
        })
        .where("game.id", game_id)
        .first()

        return {
            message: "Berhasil Mendapatkan Stats",
            data: StatsByGame(get)
        }
    }
}