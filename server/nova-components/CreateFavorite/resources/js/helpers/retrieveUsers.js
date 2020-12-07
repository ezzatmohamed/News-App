export const retrieveUsers = (Nova) => {

    return new Promise((resolve,reject)=>{

        Nova.request()
        .get('/nova-api/users')
        .then(res=>{
            let usersList = []            
            res.data.resources.forEach(user => {
                let data = {value:-1,key:""}
                
                // Searching for name&id attribute
                user.fields.forEach(field=>{
                    if(field.attribute == "id")
                        data.value = field.value
                    else if(field.attribute == "name")
                        data.key = field.value

                })
                usersList.push(data)
            });

            resolve(usersList)
        })
        .catch(err=>{
            reject(err)
        })
    })
}




