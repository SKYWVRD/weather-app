import{
    fetchWeatherData
} from './weatherdata'


const searchBox = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const cityName = document.getElementById('city');
const currTemp = document.getElementById('curr-temp');
const maxTemp = document.getElementById('max-temp');
const minTemp = document.getElementById('min-temp');


async function displayTempData(city){
    try{
        const data = await fetchWeatherData(city);
        cityName.innerHTML = city
        currTemp.innerHTML = `Current Temperature: ${data.currTemp} \u00B0C`;
        maxTemp.innerHTML = `Maximum Temperature: ${data.maxTemp} \u00B0C` ;
        minTemp.innerHTML = `Minimum Temperature: ${data.minTemp} \u00B0C`;
    }
    catch(err){
        alert(err);
    }
    

}

searchButton.addEventListener('click', () => {
    displayTempData(searchBox.value);
})
