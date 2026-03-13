// script.js

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Function to update the UI with weather information
function updateUI(weatherData) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `
        <h2>${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
    `;
}

// Search functionality
document.getElementById('searchBtn').addEventListener('click', async () => {
    const city = document.getElementById('searchInput').value;
    const weatherData = await fetchWeather(city);
    if (weatherData) {
        updateUI(weatherData);
    }
});

// Initial UI setup
updateUI({name: 'City', main: {temp: 0}, weather: [{description: 'No data'}]});