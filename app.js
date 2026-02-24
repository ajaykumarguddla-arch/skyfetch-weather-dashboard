const apiKey = "b639d141a6f9e3ac2d9ebd0d18ea2c12";   // Replace with your real API key
const cityName = "London";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl)
.then(function(response) {

    const city = response.data.name;
    const temperature = response.data.main.temp;
    const description = response.data.weather[0].description;
    const iconCode = response.data.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("city").innerText = city;
    document.getElementById("temperature").innerText = "Temperature: " + temperature + "°C";
    document.getElementById("description").innerText = description;
    document.getElementById("icon").src = iconUrl;

})
.catch(function(error) {
    console.log("Error fetching weather data:", error);
});