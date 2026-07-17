import { Injectable, NotFoundException } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { ChangeCharactersAndGame, CharactersAndGame } from 'src/Mapping/characters.game.mapping';

@Injectable()
export class CharacterGameService {
    constructor(private knexService: KnexService) {}
    
    async getAll(){
        const get = await this.knexService.connection("character_game")
        .join("game", "game.id", "character_game.game_id")
        .join("characters", "characters.id", "character_game.character_id")
        .select({
          "game_id" : "game.id",
          "game_name" : "game.name",
          "character_id" :  "characters.id",
          "character_name" : "characters.name"
        })

        return {
            message: "Berhasil Mendapatkan Character dan Game nya",
            data: CharactersAndGame(get)
        }
    }

    async create(data: { game_id: number, character_id: number}){
        const [create] = await this.knexService.connection("character_game").insert(data).returning("id")
        const get = await this.knexService.connection("character_game")
        .join("game", "game.id", "character_game.game_id")
        .join("characters", "characters.id", "character_game.character_id")
        .select({
          "game_id" : "game.id",
          "game_name" : "game.name",
          "character_id" :  "characters.id",
          "character_name" : "characters.name"
        })
        .where("character_game.id", create.id)
        .first()

        return {
            message: "Berhasil Menghubungkan Character Dan Game nya",
            data: ChangeCharactersAndGame(get)
        }
    }

    async delete(id: number){
        const get = await this.knexService.connection("character_game").select("id").where("id", id).first()
        if(!get) throw new NotFoundException("Tidak Ada")
        const del = await this.knexService.connection("character_game").delete().where("id", id)
        return {
            message: "Berhasil Menghapus hubungan Character dengan Game"
        }
    }
}
