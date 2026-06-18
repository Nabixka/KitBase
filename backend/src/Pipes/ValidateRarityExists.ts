import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateRarityExist implements PipeTransform{
    constructor(private knexservice: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        const exist = await this.knexservice.connection("rarity_game").select("id").where("id", id).first()
        if(!exist) throw new NotFoundException("Rarity Tidak Ada")
            
        return id
    }
}