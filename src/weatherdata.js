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
        const data = await response.json()
        console.log(data)

    }
    catch(err){
        alert(err)
    }
}