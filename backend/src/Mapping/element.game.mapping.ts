export function GroupElementByGame(data: any[]) {
    const grouped = data.reduce((acc, row) => {
        if (!acc[row.game_id]) {
            acc[row.game_id] = {
                id: row.game_id,
                name: row.game_name,
                elements: []
            };
        }

        acc[row.game_id].elements.push({
            id: row.id,
            name: row.element_name,
            icon: row.element_icon
        });

        return acc;
    }, {});

    return Object.values(grouped);
}

export function ElementByGameMapping(data: any[]){
    if (!data || data.length === 0) {
        return {
            game: null,
            element: []
        };
    }

    return {
        game: {
            id: data[0].game_id,
            name: data[0].game_name
        },
        element: data.map((e) => ({
            id: e.id,
            name: e.element_name,
            icon: e.element_icon
        }))
    }
}