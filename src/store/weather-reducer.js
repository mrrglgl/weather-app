const ADD_CITY = "ADD_CITY"
const ADD_WEATHER = "ADD_WEATHER"

let initialState = {
    city: "Enter the city",
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    windspeed: 0,
    latitude: undefined,
    longitude: undefined,
    icon: undefined,
}

export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CITY: 
        return {
            ...state,
            city: action.name,
            latitude: action.latitude,
            longitude: action.longitude
            }
        case ADD_WEATHER:
        return {
            ...state,
            temp: action.temp.current_weather.temperature,
            windspeed: action.temp.current_weather.windspeed,
            tempMin: action.temp.daily.temperature_2m_min,
            tempMax: action.temp.daily.temperature_2m_max,
            icon: action.temp.hourly_units.temperature_2m,
        }

        default:
        return state
    }
}

export const addCity = (name, latitude, longitude) => {
    return {
        type: ADD_CITY,
        name,
        latitude,
        longitude,
    }
}

export const addWeather = (temp) => {
    return {
        type: ADD_WEATHER,
        temp,
    }
}