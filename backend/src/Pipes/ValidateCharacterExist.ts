import { ArgumentMetadata, BadRequestException, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateCharacterExist implements PipeTransform{
    constructor(private knexService: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        if(!id) throw new BadRequestException("Isi Yang Benar")
        const exist = await this.knexService.connection("characters").select("id").where("id", id).first()
        if(!exist) throw new NotFoundException('Character Tidak Ada')

        return id
    }
}