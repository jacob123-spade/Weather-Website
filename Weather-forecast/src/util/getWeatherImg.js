import clearDay from "../WeatherImg/sun.png"; 
import clearNight from "../WeatherImg/moon-and-stars.png";
import partly from "../WeatherImg/partly-cloudy.png";  
import cloudy from "../WeatherImg/clouds.png"; 
import thunder from "../WeatherImg/thunder.png"; 
import rain from "../WeatherImg/rain.png"; 
import fog from "../WeatherImg/fog.png"; 
import snow from "../WeatherImg/snowflake.png"; 
import weather from "../WeatherImg/weather.png"; 


export const getWeatherImg = (icon)=>{
    if(!icon){
        return weather; 
    }
    const code = icon.slice(0,2); 

    if(icon === "01d"){
        return clearDay; 
    }

    else if(icon === "01n"){
        return clearNight; 
    }

    else if(code === "02"){
        return partly; 
    }

    else if(code === "03" || code === "04"){
        return cloudy; 
    }

    else if(code === "09" || code === "10"){
        return rain; 
    }

    else if(code === "11"){
        return thunder; 
    }

    else if(code === "13"){
        return snow; 
    }

    else if(code === "50"){
        return fog; 
    }
}