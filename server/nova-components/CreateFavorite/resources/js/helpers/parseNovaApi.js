export const parseNovaApi = (result) => {

    let resources =[]

    if(!result || !result.data || !result.data.resources)
        return []

    result.data.resources.forEach(item =>{

        let itemFields = []
        if( item && item.fields )
        {
            item.fields.forEach(field=>{
                const attribute = field.attribute ? field.attribute : ""
                const value = field.value ? field.value : ""
                itemFields.push({attribute,value})
            })
            resources.push(itemFields)
        }
    })

    return resources
}




