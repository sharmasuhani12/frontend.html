const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("city").innerText = data.name;
  document.getElementById("temp").innerText = data.main.temp + "°C";
  document.getElementById("feels").innerText = data.main.feels_like + "°C";
  document.getElementById("humidity").innerText = data.main.humidity + "%";
  document.getElementById("wind").innerText = data.wind.speed + " km/h";
  document.getElementById("cloud").innerText = data.clouds.all + "%";

  // Convert sunrise & sunset
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  document.getElementById("sunrise").innerText = sunrise;
  document.getElementById("sunset").innerText = sunset;
}