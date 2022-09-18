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

        console.log(formattedData)

    }
    catch(err){
        alert(err)
    }
}

async function formatWeatherData(weatherData){
    return {
        'currTemp': weatherData.temp,
        'maxTemp': weatherData.temp_max,
        'minTemp': weatherData.temp_min
    }
    
}

export{
    fetchWeatherData
}