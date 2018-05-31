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

export function weather(weather){
    return{
        type: "weather",
        weather
    }
}

export function city(cityName){
    console.log("CITY ACTION:", cityName);
    return{
        type: "city",
        cityName
    }
}


export function fetchWeather(url){
    return(dispatch) => {
        dispatch(isLoading(true))
        
        const getPosition = (options) => {
            return new Promise( (resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        }
          
        getPosition()
            .then((position) => {
              const longitude = position.coords.longitude
              const latitude = position.coords.latitude
              //const appid = "<Inserta tu clave aquí>";
              const appid = "ac40fa4914a844cbb43379bcbab81383"
              url += latitude + "&lon=" + longitude + "&appid=" + appid;

              //Petición de la situación meteorológica (segunda promesas)
              fetch(url)
                .then((response) => {
                    if( !response.ok ){
                        throw Error(response.statusText)
                    }
                    return response;
                })
                .then( response => response.json() )
                .then( response => {
                    console.log("Action Creator: ", response.list[0])
                    const weatherInfo = {
                        icon: response.list[0].weather[0].icon,
                        conditions: response.list[0].weather[0].main,
                        tempMax: response.list[0].main.temp,
                        tempMin: response.list[0].main.temp_min, 
                    }

                    const cityName = response.city.name
                    
                    dispatch(weather(weatherInfo))
                    dispatch(city(cityName))
                    dispatch(isLoading(false))
                })
                .catch(error => {
                    console.log("ERROR: ",error)
                    dispatch(hasErrored(true))
                })
            })
            .catch((err) => {
              console.error(err.message);
            })
    }
}
