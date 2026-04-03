const API_KEY = "9b5ac504dc26584421c338a2fd329f0f"; 
const API_KEY_WEEKLY = "47bf86cda4eb42d5926115130262403 "; 

export async function getWeatherApi(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url); 
    const data = await res.json(); 
    console.log(data); 
    return data; 
}

export async function getWeeklyApi(city){
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY_WEEKLY}&q=${city}&days=7`; 
    const res = await fetch(url); 
    const dataWeekly = await res.json(); 
    console.log(dataWeekly); 
    return dataWeekly; 
}


/*
배운점 

1. 간혹가다가 API 주소를 테스트를 위해서 도시이름을 하드코딩 해놓는 경우가 생긴다. 주의 할것!. 

*/

