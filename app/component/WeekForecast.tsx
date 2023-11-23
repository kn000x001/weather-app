import React from "react";

interface DayForecast {
    date: string;
    day: {
        condition: {
            icon: string;
            text: string;
        };
        maxtemp_f: number;
        mintemp_f: number;
    }
}

interface WeekForecastProps {
    data: {
        forecast: {
            forecastday: DayForecast[];
        }
    }
}

const WeekForecast = ({data}: WeekForecastProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full mt-4 p-0 md:px-12 ">
            {data.forecast.forecastday.map((day, index) => (
                <div key={index} className="bg-white/40 p-2 text-center flex flex-col items-center"> 
                    <p>{new Date(day.date).toLocaleString("en-US", {weekday: "short"})}</p>
                    <img src={day.day.condition.icon} alt="day.day.condition.text" />
                    <div>
                        <p>H {day.day.maxtemp_f.toFixed()}<span>°</span></p>
                        <p>L {day.day.mintemp_f.toFixed()}<span>°</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WeekForecast;