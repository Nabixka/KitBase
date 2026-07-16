import { NotFoundException } from "@nestjs/common"

export function GroupStatsByGame(data: any[]){
    const grouped = data.reduce((acc, row) => {
        if(!acc[row.game_id]){
            acc[row.game_id] = {
                id: row.game_id,
                name: row.game_name,
                stats: []
            }
        }
        
        acc[row.game_id].stats.push({
            id: row.id,
            stat_name: row.stat_name,
            icon: row.icon
        })

        return acc
    }, {})

    return Object.values(grouped)
}

export function StatsByGame(data: any[]){
    if(!data || data.length === 0) throw new NotFoundException("Tidak Dapat Menemukan Stats Dari Game Tersebut")
    
    return {
        game: {
            id: data[0].game_id,
            name: data[0].game_name
        },
        stats: 
            data.map(e => ({
                id: e.id,
                stat_name: e.stat_name,
                icon: e.icon
            }))
    }
}

export function ChangeStat(data: any){
    return {
        game: {
            id: data.game_id,
            name: data.game_name
        },
        stat: {
            id: data.id,
            stat_name: data.stat_name,
            icon: data.icon
        }
    }
}