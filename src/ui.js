import{
    fetchWeatherData
} from './weatherdata'

const cityName = document.getElementById('city');
const currTemp = document.getElementById('curr-temp');
const maxTemp = document.getElementById('max-temp');
const minTemp = document.getElementById('min-temp');


async function displayTempData(){
    const data = await fetchWeatherData('Cape Town');
    cityName.innerHTML = 'Cape Town'
    currTemp.innerHTML = `Current Temperature: ${data.currTemp} \u00B0C`;
    maxTemp.innerHTML = `Maximum Temperature: ${data.maxTemp} \u00B0C` ;
    minTemp.innerHTML = `Minimum Temperature: ${data.minTemp} \u00B0C`;

}


export {
    displayTempData
}