import './Left.css'; 
import SearchBar from './SearchBar';
import WeatherScreen from './WeatherScreen';
import { useContext } from "react";
import { WeatherDataContext } from "./Context";


const Left = ()=>{
    const weatherData = useContext(WeatherDataContext); 

    return (
        <div className='Left'>
            <SearchBar></SearchBar>
            <WeatherScreen weather={weatherData.weather}></WeatherScreen>
        </div>
    ); 
}; 

export default Left; 