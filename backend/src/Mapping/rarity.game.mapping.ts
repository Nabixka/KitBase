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