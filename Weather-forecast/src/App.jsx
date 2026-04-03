import './App.css'; 
import Left from './Components/Left';
import Right from './Components/Right';
import { useEffect, useState } from 'react';
import {getWeatherApi, getWeeklyApi} from "./api/weather"; 
import { WeatherFunctionContext, WeatherDataContext } from './Components/Context';

function App() {

  const [weather, setWeather] = useState(null);
  const [weekly, setWeekly] = useState(null); 

  
  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await getWeatherApi("Seoul");
      setWeather(data);

      const weeklyWeather = await getWeeklyApi("Seoul"); 
      setWeekly(weeklyWeather); 
    }

    fetchData();
  },[]);


  
  const onSearch = async (city)=>{
    try{
      const weatherData = await getWeatherApi(city); 
      setWeather(weatherData); 

      const weeklyData = await getWeeklyApi(city); 
      setWeekly(weeklyData); 

      console.log(`검색한 주간 날씨 도시: ${weeklyData.location.name}`); 
    }

    catch (e){
      console.error("API Failed", e); 
    }
  }


  return (
    <WeatherDataContext.Provider value={{weather, weekly}}>
      <WeatherFunctionContext.Provider value={onSearch}>
        <div className='App'>
          <div className="left-section">
            <Left></Left>
          </div>
          <div className="right-section">
            <Right></Right>
          </div>
        </div>
      </WeatherFunctionContext.Provider>
    </WeatherDataContext.Provider>
  ); 
}


export default App;

/* 

배운점 

  1. API는 비동기로 처리되기 때문에 처음 화면이 마운트 될때 비동기로 특정 지역 데이터를 불러와주고 그다음에 초기 weather state
  로 지정해준다. 이렇게 하면 데이터가 지정되지 않아서 발생하는 undefined 문제나 NaN 문제를 해결할 수 있다.

  2. API가 필요한 함수는 항상 비동기로 처리해준다. 
  */

