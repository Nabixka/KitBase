import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';

@Injectable()
export class CharactersService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection("characters")
        .join("rarity_game", "rarity_game.id", "rarity")
        .join("element_game", "element_game.id", "element")
        .select({
            "id" : "characters.id",
            "name" : "characters.name",
            "image" : "characters.image",

            "rarity_id" : "rarity_game.id",
            "rarity_icon" : "rarity_game.icon",
            "rarity_value" : "rarity_game.value",

            "element_id" : "element_game.id",
            "element_name" : "element_game.element_name",
            "element_icon" : "element_game.element_icon"
        })

        return {
            message: "Berhasil Mengambil Semua Karakter",
            data : 
        }
    }
}
