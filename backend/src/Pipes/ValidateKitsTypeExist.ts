import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateKitsTypeExist implements PipeTransform{
    constructor(private knexService: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        const exist = await this.knexService.connection("kits_type_game").select("id").where("id", id)
        if(!exist) throw new NotFoundException("Type Kits Tidak Ada")
        return id
    }
}