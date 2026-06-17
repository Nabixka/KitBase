import { Injectable, NotFoundException } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { ChangeElementMapping, ElementByGameMapping, GroupElementByGame } from 'src/Mapping/element.game.mapping';

@Injectable()
export class ElementGameService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection("element_game")
        .join("game", "game.id", "game_id")
        .select({
            id: "element_game.id",
            element_name: "element_game.element_name",
            element_icon: "element_game.element_icon",
            game_id: "game.id",
            game_name: "game.name"
        })

        return {
            message: "Berhasil Mendapatkan Element",
            data: GroupElementByGame(get)
        }

    }

    async getByGame(game: string){
        const get = await this.knexService.connection("element_game")
        .join("game", "game.id", "game_id")
        .select({
            id: "element_game.id",
            element_name: "element_game.element_name",
            element_icon: "element_game.element_icon",
            game_id: "game.id",
            game_name: "game.name"
        })
        .where("game.name", game)
        if(!get) throw new NotFoundException("Element Atau Game Tidak Ada")

        return {
            message: "Berhasil Mendapatkan Element Berdasarkan Game",
            data: ElementByGameMapping(get)
        }
    }

    async create(data: {element_name: string, element_icon: string, game_id: number}){
        const [create] = await this.knexService.connection("element_game").insert(data).returning("id")
        const get = await this.knexService.connection("element_game")
        .join("game", "game.id", "game_id")
        .select({
            id: "element_game.id",
            element_name: "element_game.element_name",
            element_icon: "element_game.element_icon",
            game_id: "game.id",
            game_name: "game.name"
        })
        .where("element_game.id", create.id)
        .first()

        return {
            message: "Berhasil Membuat Element",
            data: ChangeElementMapping(get)
        }
    }

    async update(data: { element_name: string, element_icon?: string, game_id: number}){
        const [update] = await this.knexService.connection("element_name").update(data).returning("id")
        const get = await this.knexService.connection("element_name")
        .join("game", "game.id", "game_id")
        .select({
            id: "element_game.id",
            element_name: "element_game.element_name",
            element_icon: "element_game.element_icon",
            game_id: "game.id",
            game_name: "game.name"
        })
        .where("element_game.id", update.id)
        .first()

        return {
            message: "Berhasil Mengubah Element",
            data: ChangeElementMapping(get)
        }
    }

    async delete(id: number){
        const del = await this.knexService.connection("element_game").where({id})
        return {
            message: "Berhasil Menghapus Element"
        }
    }
}
