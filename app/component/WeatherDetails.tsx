import {BsSunrise, BsSunset} from "react-icons/bs";
import {GiWindSlap, GiCompass } from "react-icons/gi";
import {WiHumidity} from "react-icons/wi";
import {MdAir} from "react-icons/md";
import {CiTempHigh} from "react-icons/ci";
import {FaEye} from "react-icons/fa";

interface WeatherDetailsProps {
    data: {
        current: {
            wind_mph: number;
            humidity: number;
            wind_dir: string;
            pressure_mb: number;
            feelslike_f: number;
            vis_km: number;
        };
        forecast: {
            forecastday: {
                astro: {
                    sunrise: string;
                    sunset: string;
                }
            }[];
        }
    }
}

const WeatherDetails = ({data}: WeatherDetailsProps) => {
    return (
        <>
            <div className="p-12">
                <h1 className="mb-4 text-2xl text-white">Weather Details</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grod-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Windspeed</h3>
                            <p>{data.current.wind_mph} mph</p>
                        </div>
                        <div className="text-5xl">
                            <GiWindSlap />
                        </div>
                    </div>
                    
                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Humidity</h3>
                            <p>{data.current.humidity} %</p>
                        </div>
                        <div className="text-5xl">
                            <WiHumidity />
                        </div>
                    </div>

                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Wind Direction</h3>
                            <p>{data.current.wind_dir}</p>
                        </div>
                        <div className="text-5xl">
                            <GiCompass />
                        </div>
                    </div>

                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Sunrise</h3>
                            <p>{data.forecast.forecastday[0].astro.sunrise}</p>
                        </div>
                        <div className="text-5xl">
                            <BsSunrise />
                        </div>
                    </div>

                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Sunset</h3>
                            <p>{data.forecast.forecastday[0].astro.sunset}</p>
                        </div>
                        <div className="text-5xl">
                            <BsSunset />
                        </div>
                    </div>

                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Air Pressure</h3>
                            <p>{data.current.pressure_mb} hPa</p>
                        </div>
                        <div className="text-5xl">
                            <MdAir />
                        </div>
                    </div>

                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Feels like</h3>
                            <p>{data.current.feelslike_f}</p>
                        </div>
                        <div className="text-5xl">
                            <CiTempHigh />
                        </div>
                    </div>

                    <div className="bg-white/50 flex p-4 items-center justify-center gap-6 roudned-xl">
                        <div className="text-2xl">
                            <h3>Visibility</h3>
                            <p>{data.current.vis_km} km</p>
                        </div>
                        <div className="text-5xl">
                            <FaEye />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherDetails;