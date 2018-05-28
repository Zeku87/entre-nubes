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
              console.log(position.coords);
              const longitude = position.coords.longitude
              const latitude = position.coords.latitude
              //const appid = "<Inserta tu clave aquí>";
              url += latitude + "&lon=" + longitude + "&appid=" + appid;
              console.log("URL ",url);
              fetch(url) //segunda promesa
                .then((response) => {
                    if( !response.ok ){
                        throw Error(response.statusText)
                    }
                    return response;
                })
                .then( response => response.json() )
                .then( response => {

                    const weatherInfo = {
                        icon: response.weather[0].icon,
                        conditions: response.weather[0].main,
                        tempMax: response.main.temp_max,
                        tempMin: response.main.temp_min, 
                    }

                    const cityName = response.name
                    
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
