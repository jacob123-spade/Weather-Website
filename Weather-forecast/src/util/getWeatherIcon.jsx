export const getWeatherIcon = (icon)=>{
    if(!icon){
            return <i className='bx bx-cloud'></i>; 
        }
        const code = icon.slice(0,2); 
    
        if(icon === "01d"){
            return <i className='bx bx-sun'></i> ; 
        }
    
        else if(icon === "01n"){
            return <i className='bx bx-moon'></i>; 
        }
    
        else if(code === "02"){
            return <i className='bx bx-cloud'></i>; 
        }
    
        else if(code === "03" || code === "04"){
            return <i className='bx bxs-cloud'></i>; 
        }
    
        else if(code === "09" || code === "10"){
            return <i className='bx bx-cloud-rain'></i>; 
        }
    
        else if(code === "11"){
            return <i className='bx bx-cloud-lightning'></i>; 
        }
    
        else if(code === "13"){
            return <i className='bx bx-snowflake'></i>; 
        }
    
        else if(code === "50"){
            return <i className='bx bx-cloud-fog'></i>; 
        }
}