const apiKey= "4e6bc365c9a9b4af08884437f90a4f84";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".searchFeild input");
const searchBtn=document.querySelector(".searchFeild button");
document.querySelector(".weatherIcon");

async function checkWeather(city){
	const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status==404){
		alert("invalid city name");
	}
	var data= await response.json();

	console.log(data);
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=data.main.temp + "°C";
	document.querySelector(".humidities").innerHTML=data.main.humidity + "%";
	document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";

	if(data.weather[0].main== "Clouds"){
		weatherIcon.src = "images/clouds.png";
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src = "images/sunny.png";
	}
	else if(data.weather[0].main == "Rain"){
		weatherIcon.src = "images/rain.png";
	}
	else if(data.weather[0].main == "Mist"){
		weatherIcon.src = "images/haze.png";
	}
	else if(data.weather[0].main == "Drizzle"){
	}

	document.querySelector(".container").style.display="block";
}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
})


