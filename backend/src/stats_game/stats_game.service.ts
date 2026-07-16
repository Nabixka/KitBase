import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { ChangeStat, GroupStatsByGame, StatsByGame } from 'src/Mapping/stats.game.mapping';

@Injectable()
export class StatsGameService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection("stats_game")
        .join("stat", "stat.id", "stat_id")
        .join("game", "game.id", "game_id")
        .select({
            "id": "stats_game.id",
            "icon": "stats_game.icon",
            "stat_name": "stat.stat_name",
            "game_id": "game.id",
            "game_name": "game.name"
        })

        return {
            message: "Berhasil Mendapatkan Stats",
            data: GroupStatsByGame(get)
        }
    }

    async getByGame(game_id: number){
        const get = await this.knexService.connection("stats_game")
        .join("stat", "stat.id", "stat_id")
        .join("game", "game.id", "game_id")
        .select({
            "id": "stats_game.id",
            "icon": "stats_game.icon",
            "stat_name": "stat.stat_name",
            "game_id": "game.id",
            "game_name": "game.name"
        })
        .where("game.id", game_id)

        return {
            message: "Berhasil Mendapatkan Stats",
            data: StatsByGame(get)
        }
    }

    async createGameStat(data: { icon: string, game_id: number, stat_id: number }){
        const [post] = await this.knexService.connection("stats_game").insert(data).returning("id")
        const get = await this.knexService.connection("stats_game")
        .join("stat", "stat.id", "stat_id")
        .join("game", "game.id", "game_id")
        .select({
            "id": "stats_game.id",
            "icon": "stats_game.icon",
            "stat_name": "stat.stat_name",
            "game_id": "game.id",
            "game_name": "game.name"
        })
        .where("stats_game.id", post.id)
        .first()

        return {
            message: "Berhasil Membuat Stat Game",
            data: ChangeStat(get)
        }
    }

    async updateStat(id: number, data: { icon?: string, game_id: number, stat_id: number }){
        const update = await this.knexService.connection("stats_game").update(data).where("id", id)
        const get = await this.knexService.connection("stats_game")
        .join("stat", "stat.id", "stat_id")
        .join("game", "game.id", "game_id")
        .select({
            "id": "stats_game.id",
            "icon": "stats_game.icon",
            "stat_name": "stat.stat_name",
            "game_id": "game.id",
            "game_name": "game.name"
        })
        .where("stats_game.id", id)
        .first()

        return {
            message: "Berhasil Update Stat Game",
            data: ChangeStat(get)
        }
    }

    async deleteStat(id: number){
        const del = await this.knexService.connection("stats_game").delete().where("id", id)
        return {
            message: "Berhasil Menghapus Stat"
        }
    }
}