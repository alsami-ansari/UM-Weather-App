const APIkey ="7c7437486177d66ac391c9fd3356fc92";
const URL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function Checkweather(city){
    const response = await fetch(URL + city + `&appid=${APIkey}`);

    if(response.status ==404){
            document.querySelector(".error").style.display= "block";
            document.querySelector(".weather").style.display= "none";
    }else{

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weather-description").innerHTML = data.weather[0].description
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src =" images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src =" images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src =" images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src =" images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src =" images/mist.png";
        } 
            
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display= "none";
    }

   
}


searchBtn.addEventListener("click", ()=>{
    if (search.value.trim() === "") {
        alert("Please enter a city name.");
        return;
    }
    Checkweather(search.value)
    
});

search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (search.value.trim() === "") {
            alert("Please enter a city name.");
            return;
        }
        Checkweather(search.value);
    }
});
