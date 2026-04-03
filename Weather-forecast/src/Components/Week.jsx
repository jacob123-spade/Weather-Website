import "./Week.css"; 
import WeeklyItem from "./WeeklyItem";
import { useContext } from "react";
import { WeatherDataContext } from "./Context";


const Week = ()=>{
    const { weekly } = useContext(WeatherDataContext);
    console.log(weekly); 
    const weeklyWeather = weekly?.forecast?.forecastday;
    
    if(!weekly || !weeklyWeather){
        return <div>Loading...</div>
    }

    return (
        <div className="Week">
            <div className="weekly">
                {weeklyWeather.map((item, idx)=>{
                    return <WeeklyItem 
                    key={idx} 
                    date={item.date}
                    weather={item.day?.condition?.text}
                    maxTemp={item.day?.maxtemp_c}
                    minTemp={item.day?.mintemp_c}></WeeklyItem>
                })}
            </div>
        </div>
    ); 
}; 

export default Week; 

/*
베운점: 

1. 컨텍스트의 내용을 쓸때는 항상 컨텍스트에 쓰인 변수명을 그대로 가져와야 한다. 


*/