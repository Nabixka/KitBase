import { Injectable, NotFoundException } from '@nestjs/common';
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

    async getById(id: number){
        const get = await this.knexService.connection('stat').where("id", id).first()
        if(!get) throw new NotFoundException('Stat Tidak Ditemukan')
        return {
            message: "Berhasil Mendapatkan Stat",
            data: get
        }
    }

    async create(data: { stat_name: string }){
        const [get] = await this.knexService.connection('stat').insert(data).returning("*")
        return {
            message: "Berhasil Membuat Stat",
            data: get
        }
    }

    async update(id: number, data: { stat_name: string }){
        const put = await this.knexService.connection('stat').update(data).where("id", id).returning("*")
        return {
            message: "Berhasil Mengupdate Stat",
            data: put
        }
    }

    async delete(id: number){
        const del = await this.knexService.connection('stat').delete().where("id", id)
        return {
            message: "Berhasil Menghapus Stat"
        }
    }
}