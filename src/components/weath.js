import React,{useEffect, useState} from "react";
import "./css/style.css";
const Weath=()=>{
    const [city,setCity]=useState(null);
    const[search,setSearch]=useState("Agra");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2019f755e2835b35d72d34541df3e0e7`;
            const response=await fetch(url)
            // console.log(response);
            const resJson= await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
        <div className="inputData">
            <input 
            type="search"
            value={search}
            className="inputField"
            onChange={(event)=>{
                setSearch(event.target.value)
            }}
            />
        </div>
        {!city ? (
            <p className="errorMsg"> NO DATA FOUND </p>
        ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fa-solid fa-street-view"></i><br/>
            {search}
            </h2>
            <h1 className="temp">
             {city.temp}°C
            </h1>
            <h3 className="tempmin_max">Min :{city.temp_min}°C| Max:{city.temp_max} °C</h3>
        </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
        )}

       
    </div>
        </>
    )
}
export default Weath;