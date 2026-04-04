import "./SearchBar.css"; 
import { useContext, useState, useRef } from "react";
import { WeatherFunctionContext } from "./Context";

const SearchBar = ()=>{
    const [city, setCity] = useState(""); 
    const onSearch = useContext(WeatherFunctionContext);
    const idRef = useRef(); 
    
    const onChangeCity = (e)=>{
        setCity(e.target.value); 
    }

    const onSearchCity = ()=>{
        if(city.trim()===""){
            idRef.current.focus(); 
            return; 
        }

        onSearch(city); 
        setCity(""); 
    }

    const onClickEnter = (e)=>{
        if(e.key==="Enter"){
            onSearchCity(); 
            return; 
        }
    }

    return (
        <div className="SearchBar">
            <div className="search-icon">
                <i className='bx bx-search'></i>
            </div>
            <input 
            ref={idRef}
            value={city}
            type="text"
            onChange={onChangeCity} 
            onKeyDown={onClickEnter}
            placeholder="Search for places ..."/>
            
            <div className="search-button" onClick={onSearchCity}>
                <i className='bx bx-current-location'></i>
            </div>


        </div>
    ); 
}; 

export default SearchBar; 