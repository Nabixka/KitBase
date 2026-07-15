export function MappingByRarityAndElementCharacter(data: any[]){
    const grouped = data.reduce((acc, row) => {
        if(!acc[row.rarity_id]){
            acc[row.rarity_id] = {
                rarity: {
                    id: row.rarity_id,
                    icon: row.rarity_icon,
                    value: row.rarity_value
                },
                element: {
                    id: row.element_id,
                    icon: row.element_icon,
                    name: row.element_name
                },
                characters: []
            } 
        }

        acc[row.rarity_id].characters.push({
            id: row.id,
            name: row.name,
            image: row.image
        })

        return acc
    }, {})

    return Object.values(grouped)
}