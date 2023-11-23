"use client";
import Input from "./component/input";
import React, { useState } from "react";
import WeatherDetails from "./component/WeatherDetails";
import WeekForecast from "./component/WeekForecast";
import Current from "./component/Current";


export default function Home() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url =  `http://api.weatherapi.com/v1/forecast.json?key=74a832548c9746cdb04132341232311&q=${location}&days=7&aqi=no&alerts=yes`

  const hadnleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault()
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")
      } catch (error) {
        setError("City Not Found")
        setData({})
      }
    }
  }

  let content;

  if(Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Weather App</h2>
        <p className="text-xl">Enter a city name to get a weather forecast</p>
      </div>
    )
  } else if(error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Enter a valid city</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col items-center justify-between p-12">
          <Current data={data}/>
          <WeekForecast data={data}/>
        </div>
        <div>
          <WeatherDetails data={data}/>
        </div>
      </>
    )
  }
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit order-2 md:order-1">        
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
            <Input handleSearch={hadnleSearch}
            setLocation={setLocation}/>
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 md:order-2 rounded-xl italic font-bold text-xl">Nika's Weather App</h1>
        </div>
          {content}
      </div>
    </div>
  )
}
