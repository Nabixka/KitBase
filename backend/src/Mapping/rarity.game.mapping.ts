import { NotFoundException } from "@nestjs/common";

export function GroupRarityByGame(data: any[]){
    const grouped = data.reduce((acc, row) => {
        if(!acc[row.game_id]){
            acc[row.game_id] = {
                id: row.game_id,
                name: row.game_name,
                raritys: []
            }
        }

        acc[row.game_id].raritys.push({
            id: row.id,
            value: row.value,
            icon: row.icon
        })

        return acc;
    }, {})

    return Object.values(grouped)
}

export function RarityByGame(data: any[]){
    if(!data || data.length === 0) throw new NotFoundException("Tidak Dapat Menemukan Data")
    return {
        game: {
            id: data[0].game_id,
            name: data[0].game_name
        },
        rarity: [
            data.map(e => ({
                id: e.id,
                value: e.value,
                icon: e.icon
            }))
        ]
    }
}