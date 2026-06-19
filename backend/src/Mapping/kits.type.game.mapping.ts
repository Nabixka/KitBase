import { NotFoundException } from "@nestjs/common"

export function GroupKitsByGame(data: any[]){
    const grouped = data.reduce((acc, row) => {
        if(!acc[row.game_id]){
            acc[row.game_id] = {
                id: row.game_id,
                name: row.game_name,
                kits: []
            }
        }

        acc[row.game_id].kits.push({
            id: row.id,
            name: row.kits_type_name
        })

        return acc
    }, {})

    return Object.values(grouped)
}

export function KitsByGame(data: any[]){
    if(data.length === 0 || !data) throw new NotFoundException("Tidak Ada Type Kit Dari Game Tersebut")
    
    return {
        game: {
            id: data[0].game_id,
            name: data[0].game_name
        },
        kits:
            data.map(e => ({
                id: e.id,
                name: e.kits_type_name
            }))
    }
}

export function ChangeKits(data: any){
    return {
        game: {
            id: data.game_id,
            name: data.game_name
        },
        kits: {
            id: data.id,
            name: data.kits_type_name
        }
    }
}