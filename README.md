# Weather Dashboard Documentation

## Overview  
This weather dashboard allows users to view the current weather and forecast for various locations. It offers features such as location search, temperature display, and detailed forecast outlooks.

## Features  
- Search for any city to get the current weather conditions.
- View a 5-day weather forecast.
- Display temperature in either Celsius or Fahrenheit.
- Option to save favorite locations.

## API Setup Instructions  
1. **Sign up for a free API key** at [OpenWeatherMap](https://openweathermap.org/appid).
2. **Install necessary packages** using npm:
   ```bash
   npm install axios
   ```
3. **Create a `.env` file** in the root of your project and add your API key:
   ```plaintext
   API_KEY=your_api_key_here
   ```
4. **Integrate the API** within your code by importing it:
   ```javascript
   import axios from 'axios';
   ```
   Here’s a simple example to fetch weather data:
   ```javascript
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=${process.env.API_KEY}`)
     .then(response => { console.log(response.data); })
     .catch(error => { console.error(error); });
   ```

## Usage  
- Start the application by running:
   ```bash
   npm start
   ```  
- Access it via your web browser at `http://localhost:3000`.

## Contributing  
Contributions are welcome! Please fork the repository and create a pull request for any improvements.