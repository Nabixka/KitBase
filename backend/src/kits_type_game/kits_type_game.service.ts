import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { ChangeKits, GroupKitsByGame, KitsByGame } from 'src/Mapping/kits.type.game.mapping';

@Injectable()
export class KitsTypeGameService {
    constructor(private knexService: KnexService) {}
    
    async getAll(){
        const get = await this.knexService.connection("kits_type_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "kits_type_game.id",
            "kits_type_name": "kits_type_game.kits_type_name",
            "game_id" : "game.id",
            "game_name" : "game.name"
        })

        return {
            message: "Berhasil Mengambil Type Kits Dari Semua Game",
            data: GroupKitsByGame(get)
        }
    }

    async getByGame(id: number){
        const get = await this.knexService.connection("kits_type_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "kits_type_game.id",
            "kits_type_name": "kits_type_game.kits_type_name",
            "game_id" : "game.id",
            "game_name" : "game.name"
        })
        .where("game.id", id)

        return {
            message: "Berhasil Mengambil Type Kits Dari Game",
            data: KitsByGame(get)
        }
    }

    async createKits(data: { game_id: number, kits_type_name: string}){
        const create = await this.knexService.connection("kits_type_game").insert(data).returning("id")
        const get = await this.knexService.connection("kits_type_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "kits_type_game.id",
            "kits_type_name": "kits_type_game.name",
            "game_id": "game.id",
            "game_name": "game.name"
        })
        .where("kits_type_game.id", create)

        return {
            message: "Berhasil Membuat Type Kits",
            data: ChangeKits(get)
        }
    }

    async updateKits(id: number, data: { game_id: number, kits_type_name: string } ){
        const update = await this.knexService.connection("kits_type_game").update(data).where("id", id)
        const get = await this.knexService.connection("kits_type_game")
        .join("game", "game.id", "game_id")
        .select({
            "id": "kits_type_game.id",
            "kits_type_name": "kits_type_game.name",
            "game_id": "game.id",
            "game_name": "game.name"
        })
        .where("kits_type_game.id", id)

        return {
            message: "Berhasil Mengubah Type kits",
            data: ChangeKits(get)
        }
    }

    async deleteKits(id: number){
        const del = await this.knexService.connection("kits_type_game").delete().where("id", id)

        return {
            message: "Berhasil Menghapus Type Kits"
        }
    }
}
