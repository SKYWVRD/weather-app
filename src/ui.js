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
        clearData();
        cityName.innerHTML = 'Loading...'
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

function clearData(){
    cityName.innerHTML = '';
    currTemp.innerHTML = '';
    maxTemp.innerHTML = '';
    minTemp.innerHTML = '';
}

searchButton.addEventListener('click', () => {
    displayTempData(searchBox.value);
})
