export function MappingByRarityAndElementCharacter(data: any[]) {
    const grouped = data.reduce((acc, row) => {
        const groupKey = `${row.rarity_id}-${row.element_id}`;

        if (!acc[groupKey]) {
            acc[groupKey] = {
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
            };
        }

        acc[groupKey].characters.push({
            id: row.id,
            name: row.name,
            image: row.image
        });

        return acc;
    }, {});

    return Object.values(grouped);
}