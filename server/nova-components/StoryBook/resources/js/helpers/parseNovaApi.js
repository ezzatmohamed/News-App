
export const parseNovaApi = (result, attributes) => {

    if (!Array.isArray(attributes))
        return []

    if (!result || !result.data || !result.data.resources)
        return []


    let resources = []

    result.data.resources.forEach(item => {

        let itemFields = {}
        if (item && item.fields) {
            item.fields.forEach(field => {
                const attribute = field.attribute ? field.attribute : ""
                const value = field.value ? field.value : ""

                if (attributes.includes(attribute))
                    itemFields[attribute] = value
            })
            resources.push(itemFields)
        }
    })
    return resources
}




