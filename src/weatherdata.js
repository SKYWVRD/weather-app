async function fetchWeatherData(city){
    
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d9db3cd9136b599d1cb981aab399f6fe`, {
        mode: 'cors'
        })
        .then((response)=>{
            if(response.ok){
                return response
            }
            throw new Error('City Not Found')
        })
        const rawData = await response.json()

        const formattedData =  await formatWeatherData(rawData.main)

        return formattedData

    }
    catch(err){
        throw (err)
    }
}

async function formatWeatherData(weatherData){
    const kelvin = 273.15;
    
    return {
        'currTemp': (Number((weatherData.temp-kelvin).toFixed(0))),
        'maxTemp': (Number((weatherData.temp_max-kelvin).toFixed(0))),
        'minTemp': (Number((weatherData.temp_min-kelvin).toFixed(0)))
    }
    
}

export{
    fetchWeatherData
}