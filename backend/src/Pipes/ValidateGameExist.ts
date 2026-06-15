import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateGameExist implements PipeTransform {
    constructor(private knexService: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        const exist = await this.knexService.connection('game').where('id', id).first()
        if(!exist) throw new NotFoundException("Game Tidak Ada")

        return id
    }
}