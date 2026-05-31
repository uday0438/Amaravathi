import { useEffect, useState } from 'react';
import { Cloud, Sun, CloudRain, Snowflake, Wind } from 'lucide-react';
import { motion } from 'motion/react';

export function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Latitude and Longitude for Amaravati, Andhra Pradesh
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=16.5062&longitude=80.6480&current=temperature_2m,weather_code');
        const data = await response.json();
        setWeather(data.current);
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return null;

  const getWeatherIcon = (code: number) => {
    if (code <= 3) return <Sun className="w-5 h-5 text-amber-500" />;
    if (code >= 45 && code <= 48) return <Wind className="w-5 h-5 text-slate-400" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-5 h-5 text-blue-400" />;
    if (code >= 71 && code <= 77) return <Snowflake className="w-5 h-5 text-blue-200" />;
    return <Cloud className="w-5 h-5 text-slate-500" />;
  };

  const getWeatherDescription = (code: number) => {
    if (code <= 3) return "Clear/Sunny";
    if (code >= 45 && code <= 48) return "Foggy";
    if (code >= 51 && code <= 67) return "Rainy";
    if (code >= 71 && code <= 77) return "Snowy";
    return "Cloudy";
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm mt-8 mx-auto"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800">
        {getWeatherIcon(weather.weather_code)}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Amaravati Campus</span>
        <span className="text-sm font-bold text-slate-900 dark:text-white">
          {weather.temperature_2m}°C • {getWeatherDescription(weather.weather_code)}
        </span>
      </div>
    </motion.div>
  );
}
