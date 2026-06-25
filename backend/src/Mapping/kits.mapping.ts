export function GroupKits(data: any){
    return {
            id: data.id,
            name: data.name,
            desription: data.description,
            cooldown: data.cooldown,
            image_vidio: data.image_vidio,
            icon: data.icon,
            target: data.target,
            stats: {
                name: data.stats_name,
                icon: data.stats_icon
            },
            type: data.kits_type_name
    }
}