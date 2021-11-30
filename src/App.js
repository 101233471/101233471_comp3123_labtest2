 import './App.css';
 import React, { useEffect, useState } from "react";
 
 function App() {
   const [weatherData, setWeatherData] = useState();
                                   
  
   const getWeatherData = async () => {
      const res = await fetch(
         "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=3df38a09d948643c333c37a9233e6a94").then((res) => res.json());
                                
     setWeatherData(res);
   };

   function convertTemp()
   {

   }
   function getDay()
   {
    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    return weekdays[a.getDay()];
   }

     
   useEffect(() => {
     getWeatherData();
   }, []);
   
   console.log(weatherData);
   
   return (
    <div className="App">
      <header className="App-header">
      <img src={ weatherData && "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"} alt="weather icon"/>
      <h3>{getDay()}</h3>
      <h3>{(weatherData && weatherData.name)}</h3>
      <h3> feels like {weatherData && (weatherData.main.feels_like - 273.15).toFixed(1) + "\u00B0C"}</h3>
      <h3>{weatherData && JSON.stringify(weatherData, null, 2)}</h3>
      </header>
     </div> 
     
  );
 }
 
export default App;
