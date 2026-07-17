export function CharactersAndGame(data: any[]){
    const grouped = data.reduce((acc, row) => {
        if(!acc[row.game_id]){
            acc[row.game_id] = {
                id: row.game_id,
                name: row.game_name,
                characters: []
            }
        }

        acc[row.game_id].characters.push({
            id: row.character_id,
            name: row.character_name,
            image: row.character_image
        })

        return acc
    }, {})

    return Object.values(grouped)
}

export function ChangeCharactersAndGame(data: any){
    return {
        game: {
            id: data.game_id,
            name: data.game_name
        },
        character: {
            id: data.character_id,
            name: data.character_name,
            image: data.character_image
        }
    }
}