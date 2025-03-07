import {useState,useEffect } from 'react'
import './App.css'
import './style.css'
import { TiWeatherDownpour } from "react-icons/ti";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { WiSmoke } from "react-icons/wi";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudBolt } from "react-icons/fa6";
import { FaCloudflare } from "react-icons/fa";

function App() {

  let [weather,setweather] =useState("Chennai");
  const[apidata,setapidata] =useState(null);

    useEffect(()=>{
      getApidata();
    },[])
    function store(event){
      return setweather(event.target.value);
  }
    function getApidata(){
     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=4823ed386193d87101b99f028a1feeed`)
    .then((item) => item.json()).then((data)=>setapidata(data));
  }
  console.log(apidata);
  

  return (
    
      <div className='container'>
          <div className='card'>
              <h2 className='title'>Weather Card</h2>
              <input onChange={store} className='input' placeholder='Enter your city name:'/> <button onClick={getApidata} className='btn'>Click</button>
              <h1 className='title2'>{apidata && apidata.name}</h1>
              {apidata && (apidata.weather[0].main == "Clear"?
              <TiWeatherDownpour className='icon'/>
              :apidata.weather[0].main == "Mist"?
              <FaCloudBolt className='icon'/>
              :apidata.weather[0].main == "Smoke"?
              <WiSmoke className='icon'/>
              :<FaCloudflare className='icon'/>)}
              <span className='mist'>{apidata && apidata.weather[0].main}</span>
              <div className='box2'>
                <div className='sbox1'>
                  <button className='btn4'>Humidity</button>
                  <div>
                  <WiHumidity className='icon3' />
                  <span className='span'>{apidata && apidata.main.humidity}</span>
                  </div>
                </div>
                <div className='sbox2'>
                <button className='btn4'>Wind Speed</button>
                <div>
                <FiWind className='icon3' />
                <span className='span'>{apidata && apidata.wind.speed}</span>
                </div>
                
                </div>

              </div>
          </div>
      </div>
    
  )
}

export default App
