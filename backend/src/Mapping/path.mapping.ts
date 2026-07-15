import { NotFoundException } from "@nestjs/common"

export function GroupPathByGame(data: any[]){
    const grouped = data.reduce((acc, row) => {
        if(!acc[row.game_id]){
            acc[row.game_id] = {
                id: row.game_id,
                name: row.game_name,
                path: []
            }
        }

        acc[row.game_id].path.push({
            id: row.id,
            name: row.name,
            icon: row.icon
        })

        return acc
    }, {})

    return Object.values(grouped)
}

export function ChangePathMapping(data: any){
    return {
        id: data.id,
        name: data.name,
        icon: data.icon,
        game: {
            id: data.game_id,
            name: data.game_name
        }
    }
}

export function PathByGame(data: any[]){
    if(data.length === 0 || !data ) throw new NotFoundException("Tidak menemukan Path dari game tersebut")

    return {
        game: {
            id: data[0].game_id,
            name: data[0].game_name
        },
        path: 
            data.map((e) => ({
                id: e.id,
                name: e.name,
                icon: e.icon
            }))
    }
}