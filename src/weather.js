import { useEffect, useState } from "react";
const API_KEY="18e93655ca5375b6393c54f341d4b559";
export function useWeather(query,unit){
    const[weather,setWeather]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(
      function(){
        if(unit=="celcius"){
          unit="metric";
        }
        if(unit=="fahrenheit"){
          unit="imperial";
        }
      },
      [unit]
    );
    useEffect(
        function(){
            const controller=new AbortController();
            async function fetchWeather() {
               try{
                setIsLoading(true);
                setError("");
                const res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=${unit}`,
                    {signal:controller.signal}
                );
                if(!res.ok) throw new Error("Something wrong with fetching weather");
                const data=await res.json();
                console.log(data);
                setWeather(data);
                setError("");
               } catch(err){
                if (err.name !== "AbortError") {
                    setError(err.message);
                  }
               }
               finally {
                setIsLoading(false);
              }
            }
            if (query.length < 3) {
                setWeather(null);
                setError("");
                return;
              }
              fetchWeather();
              return function () {
                controller.abort();
              };
        },
        [query]
    );
    return {weather,isLoading,error};
}