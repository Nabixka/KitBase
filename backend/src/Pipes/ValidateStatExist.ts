import { ArgumentMetadata, BadRequestException, ConflictException, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { KnexService } from "src/database/knexService";

@Injectable()
export class ValidateStatExist implements PipeTransform{
    constructor(private knexservice: KnexService) {}
    async transform(value: any) {
        const id = Number(value)
        const exist = await this.knexservice.connection("stat").select("id").where("id", id).first()
        if(!exist) throw new NotFoundException("Tidak Menemukan Stats")

        return id
    }
}

@Injectable()
export class ValidateSameStat implements PipeTransform{
    constructor(private knexService: KnexService) {}
    async transform(value: any) {
        const name = value
        if(!name) throw new BadRequestException('Isi Yang Benar')
        const exist = await this.knexService.connection("stat").select('id').where("stat_name", name).first()
        if(exist) throw new ConflictException("Stat Yang Sama Sudah Ada")

        return name
    }
}