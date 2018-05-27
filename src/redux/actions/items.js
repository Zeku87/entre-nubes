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

export function weatherConditions(weather){
    return{
        type: "weather",
        weather
    }
}

export function fetchWeather(url){
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
            let weather = [response.weather[0].icon]
            weather.push(response.weather[0].main)
            weather.push(response.main.temp_max)
            weather.push(response.main.temp_min)
            dispatch(weatherConditions(weather))
            dispatch(isLoading(false))
        })
        .catch(error => {
            console.log("ERROR: ",error)
            dispatch(hasErrored(true))
        })
    }
}