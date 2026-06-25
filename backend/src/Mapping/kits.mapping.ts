export function GroupKitsByGame(data: any[]) {
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
            name: row.name,
            description: row.description,
            level: row.level,
            cooldown: row.cooldown,
            image_vidio: row.image_vidio,
            icon: row.icon,
            target: row.target,
            stats_name: row.stats_name,
            stats_icon: row.stats_icon,
            kits_type_name: row.kits_type_name
        })

        return acc
    }, {})

    return Object.values(grouped)
}