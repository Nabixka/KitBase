import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateStatGameExist implements PipeTransform{
    constructor(private knexservice: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        const exist = await this.knexservice.connection("stats_game").select("id").where("id", id).first()
        if(!exist) throw new NotFoundException("Tidak Menemukan Stats")

        return id
    }
}