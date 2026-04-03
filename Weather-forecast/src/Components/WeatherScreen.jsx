import "./WeatherScreen.css"; 
import { getWeatherImg } from "../util/getWeatherImg";
import { getWeatherIcon } from "../util/getWeatherIcon";
import { getWeatherIconMain } from "../util/getWeatherIconMain";
import { useEffect, useState } from "react";

const getFormattedTime = (timezone)=> {
    //실시간 시간, 요일 변경 함수 (지역에 따라서 -> 외국 도시도 가능하다)

    const now = Date.now();  
    const localTime = now + timezone* 1000; 
    const date = new Date(localTime); 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    const day = days[date.getUTCDay()];
    const hour = String(date.getUTCHours()).padStart(2,"0"); 
    const minute = String(date.getUTCMinutes()).padStart(2, "0");

    return {
        day, 
        time: `${hour}:${minute}`
    }; 
}

const WeatherScreen = ({weather})=>{
    const icon = weather?.weather?.[0]?.icon; 
    const weatherMain = weather?.weather?.[0]?.main; 
    const temp = weather?.main?.temp; 
    const timezone = weather?.timezone; 
    const city = weather?.name; 

    const [day, setDay] = useState(getFormattedTime(timezone)); 

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDay(getFormattedTime(timezone)); 
        }, 1000);
        
        return () => clearInterval(timer); 
    },[timezone]); 

    return (
        <div className="WeatherScreen">
            <div className="main-info">
                <div className="weather-image">
                    <img src={getWeatherImg(icon)} alt="Weather"/>
                </div>
                <div className="temp">
                    {Math.round(temp)}°C
                </div>
                <div className="info">
                    <p id="day">{day.day}</p>
                    <p id="time">{day.time}</p>
                </div>
            </div>

            <div className="sub-info">
                <div className="weather-description">
                    <div className="icon-section">
                        {getWeatherIcon(icon)}
                    </div>
                    <div className="weather">
                        {weather?.weather?.[0]?.description}
                    </div>
                </div>

                <div className="weather-main">
                    <div className="icon-main">
                        <i className={getWeatherIconMain(weatherMain)}></i>
                    </div>
                    <div className="main-info">
                        {weatherMain}
                    </div>
                </div>
            </div>

            <div className="city-img">
                {city}
            </div>


        </div>
    ); 
}

export default WeatherScreen; 

/*
배운점 

1. openWeather에서 반환해주는 아이콘은 유지하면서 해당 이미지만 바꾸는 방법은 
FE에서 커스텀 이미지 매핑 방법이 있다. 

즉, 이미지를 객체로 매핑해서 저장해 놓은 다음에 쓰면된다. \

2. 데이트 객체를 생성해서 요일, 시간 등을 구할수 있다. 포메팅해서 데이터를 관리하자!
 
3. 

useEffect(()=>{
        const timer = setInterval(()=>{
            setDay(getFormattedTime()); 
        },1000);
        
        return ()=> clearInterval(timer); 

    }, []); 
이 함수는 시간을 실시간으로 바꿔주는 코드이다. 

코드 설명: 

처음 마운트되면 setInterval를 1초마다 실행해서 day state를 바꿔준다. 그 후에 
return ()=> clearInterval(timer)를 통해서 언마운트 시에 타이머를 제거하고 깔끔하게 코드를 끝낸다. 
이게 없으면 컴포넌트 사라져도 코드가 계속 실행되고 메모리 누수 + 타이머 쌓임 현상이 발생한다. 

4. 

const getFormattedTime = (timezone)=> {
    //실시간 시간, 요일 변경 함수 

    const now = Date.now();  
    const localTime = now + timezone* 1000; 
    const date = new Date(localTime); 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

    const day = days[date.getUTCDay()];
    const hour = String(date.getUTCHours()).padStart(2,"0"); 
    const minute = String(date.getUTCMinutes()).padStart(2, "0");

    return {
        day, 
        time: `${hour}:${minute}`
    }; 
}

코드 설명 -> 

Date.now() => 현재 시간을 밀리세컨드로 가져옴 기준: UTC(1970-01-01 기준)
const localTime = now + timezone* 1000; timezone은 API에서 주는 값이며 UTC 기준 offset 
따라서 UTC + offset

date는 도시 기준 시간을 담고 있는 데이트 객체이다. 

getUTCDay(): 결과값을 UTC 기준으로 0~6까지로 저절로 반환해준다. 내부구조는 내가 알바 아님 그냥 쓰면 된다.
getUTCHours(), 
getUTCMinutes(): 

주의할점!

1. 요일은 항상 일요일부터 시작되는게 표준이다. 그에 맞춰서 요일을 리스트화 해줘야 getDay()함수가 요일을 잘 출력한다.
*/