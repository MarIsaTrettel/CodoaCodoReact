const api = "https://www.thecocktaildb.com/api/json/v1/1"

export const get = (path) =>{

    return fetch (api + path, {
        "Content-Type": "application/json;charset=utf-8"
    }).then((results)=>results.json())

}