import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';

@Injectable()
export class StatService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const get = await this.knexService.connection('stat').select("*")

        return {
            message: "Berhasil Mendapatkan Stat",
            data: get
        }
    }
}