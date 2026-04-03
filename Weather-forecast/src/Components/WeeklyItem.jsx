import { getWeatherIconMain } from '../util/getWeatherIconMain';
import './WeeklyItem.css'; 

const WeeklyItem = ({date, weather, maxTemp, minTemp})=>{

    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]; 
    const today = days[new Date(date).getUTCDay()]; 
    

    return (
        <div className='WeeklyItem'>
            <div className="day">
                {today}
            </div>
            <div className="weather-container">
                <i className={getWeatherIconMain(`${weather}`)}></i>
            </div>
            <div className="day-temp">
                {`${Math.round(maxTemp)}°/${Math.round(minTemp)}°`}
            </div>
        </div>
    ); 
}

export default WeeklyItem; 