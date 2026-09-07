const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "a10f23a60038c3c0bd7f5a1cc041ee0f";

const getWeather = async () => {

const city = cityInput.value.trim();

if(city === ""){

alert("Please Enter City");

return;

}

try{

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

const data = await response.json();

if(data.cod !== 200){

weatherResult.innerHTML = "<p>City Not Found</p>";

return;

}

weatherResult.innerHTML = `
<h2>${data.name}</h2>
<p>Temperature : ${data.main.temp} °C</p>
<p>Weather : ${data.weather[0].main}</p>
<p>Humidity : ${data.main.humidity}%</p>
`;

}catch(error){

weatherResult.innerHTML = "<p>Something Went Wrong</p>";

}

};

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

getWeather();

}

});