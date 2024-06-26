document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = "fcc8de7015bbb202209bbf0261babf4c"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
            console.error('Error:', error);
        });
});
