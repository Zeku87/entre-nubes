export function hasErrored(state = false, action){
    return action.type === "ERROR" ? action.hasErrored : state
}

export function isLoading(state = false, action){
    return action.type === "LOADING" ? action.isLoading : state
}

export function weather( state = {}, action) //icono soleado por defecto
{
    return action.type === "weather" ? action.weather : state
}

export function city(state = "Tawarano" , action ) //por defecto la ciudad de Tawarano(Japón)
{
    return action.type === "city" ? action.cityName : state
}