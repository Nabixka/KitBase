import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateElementExist implements PipeTransform{
    constructor(private knexService: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        const exist = await this.knexService.connection("element_game").select("id").where("id", id).first()
        if(!exist) throw new NotFoundException("Element Tidak Ada")

        return id
    }
}