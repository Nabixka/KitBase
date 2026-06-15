import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/database/knexService';

@Injectable()
export class GameService {
    constructor(private knexService: KnexService) {}

    async getAll(){
        const data = await this.knexService.connection('game').select("*")
        
        return {
            message: "Berhasil Mengambil Data Game",
            data: data
        }
    }

    async getOne(id: Number){
        const get = await this.knexService.connection('game').select("*").where({id}).first()

        return {
            message: "Berhasil Mengambil Data Game",
            data: get
        }
    }

    async create(data: { name: string, image: string}){
        const [create] = await this.knexService.connection('game')
        .insert(data)
        .returning("*")
        return {
            message: "Berhasil Membuat Game",
            data: create
        }
    }

    async update(id: Number, data: {name: string, image?: string}){
        const [update] = await this.knexService.connection('game')
        .update(data)
        .where({id})
        .returning("*")

        return {
            message: "Berhasil Update",
            data:  update
        }
    }

    async delete(id: Number){
        const del = await this.knexService.connection('game').delete().where({id})
        return {
            message: "Berhasil Menghapus Game"
        }
    }
}
