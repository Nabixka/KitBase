import { Injectable, NotFoundException } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { ChangePathMapping, GroupPathByGame, PathByGame } from 'src/Mapping/path.mapping';

@Injectable()
export class PathService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection("path_game")
        .join("game", "game.id", "game_id")
        .select({
            id: "path_game.id",
            name: "path_game.name",
            icon: "path_game.icon",
            game_id: "game.id",
            game_name: "game.name"
        })

        return {
            message: "Berhasil Mendapatkan Path",
            data:  GroupPathByGame(get)
        }
    }

    async getByGame(game_id: number){
        const get = await this.knexService.connection("path_game")
        .join("game", "game.id", "game_id")
        .select({
            id: "path_game.id",
            name: "path_game.name",
            icon: "path_game.icon",
            game_id: "game.id",
            game_name: "game.name"
        })
        .where("game.id", game_id)

        return {
            messsage: "Berhasil Mendapatkan Path Berdasarkan Game",
            data: PathByGame(get)
        }
    }

    async createPath(data: { game_id: number, name: string, icon: string }){
        const create = await this.knexService.connection("path_game").insert(data).returning("id")
        const get = await this.knexService.connection("path_game")
        .join("game", "game.id", "game_id")
        .select({
            id: "path_game.id",
            name: "path_game.name",
            icon: "path_game.icon",
            game_id: "game.id",
            game_name: "game.name"
        })

        return {
            message: "Berhasil Membuat Path",
            data: ChangePathMapping(get)
        }
    }
}
