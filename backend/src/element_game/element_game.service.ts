import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';
import { ElementByGameMapping, GroupElementByGame } from 'src/Mapping/element.game.mapping';

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

        return {
            message: "Berhasil Mendapatkan Element Berdasarkan Game",
            data: ElementByGameMapping(get)
        }
    }
}
