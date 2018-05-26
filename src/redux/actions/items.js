export function hasErrored(bool){
    return{
        type: 'ERROR',
        hasErrored:bool
    }
}

export function isLoading(bool){
    return {
        type: 'LOADING',
        isLoading: bool
    }
}

export function weatherIcon(icon){
    return{
        type: "icon",
        icon
    }
}

export function fetchWeatherIcon(url){
    return(dispatch) => {
        dispatch(isLoading(true))
        fetch(url)
        .then((response) => {
            if( !response.ok ){
                throw Error(response.statusText)
            }
            return response;
        })
        .then( response => response.json() )
        .then( response => {
            console.log("ICON FETCHED: ",response.weather[0].icon)
            dispatch(weatherIcon(response.weather[0].icon))
            dispatch(isLoading(false))
        })
        .catch(error => {
            console.log("ERROR: ",error)
            dispatch(hasErrored(true))
        })
    }
}