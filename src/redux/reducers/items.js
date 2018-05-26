export function hasErrored(state = false, action){
    return action.type === "ERROR" ? action.hasErrored : state
}

export function isLoading(state = false, action){
    return action.type === "LOADING" ? action.isLoading : state
}

export function weatherIcon( state = "04d", action) //icono soleado por defecto
{
    return action.type === "icon" ? action.icon : state
}