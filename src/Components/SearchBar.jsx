import React, { useEffect, useRef, useState } from "react"
import "./CurrentCity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { useWeather } from "../weather";
import axios from "axios";

const API_KEY = '18e93655ca5375b6393c54f341d4b559'; // Replace with your API key
const SearchBar = () => {
  const [searchBarIsOpen,setSerchBarIsOpen]=useState(false);
  const[favoriteIsOpen,setFavoriteIsOpen]=useState(false);
  const[query,setQuery]=useState("Mumbai");
  const[unit,setUnit]=useState("celcius");
  const [suggestions, setSuggestions] = useState([]); // List of city suggestions
  const [selectedCity, setSelectedCity] = useState(null); // Selected city details

  const inputRef=useRef(null);
  const dropdownRef = useRef(null);
  const favoriteInputRef=useRef(null);
  const favoritedropdown=useRef(null);

  //making call to server via custom hook
  //const{weather,isLoading,error}=useWeather(query,unit);




// Close dropdown on outside click
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setSerchBarIsOpen(false);
    }
  };
  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);
  
// Close favorite dropdown on outside click
useEffect(() => {
  const handleClickFavoriteOutside = (event) => {
    if (
      favoriteInputRef.current &&
      !favoriteInputRef.current.contains(event.target) &&
      favoritedropdown.current &&
      !favoritedropdown.current.contains(event.target)
    ) {
      setFavoriteIsOpen(false);
    }
  };
  document.addEventListener('click', handleClickFavoriteOutside);
  return () => {
    document.removeEventListener('click', handleClickFavoriteOutside);
  };
}, []);

 // Fetch city suggestions based on input
 const fetchCitySuggestions = async (input) => {
  if (input.trim() === '') {
    setSuggestions([]);
    return;
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q: input,
          limit: 10, // Number of suggestions
          appid: API_KEY,
        },
      }
    );
    setSuggestions(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching city suggestions:', error);
  }
};

// Handle input change
const handleInputChange = (event) => {
  const input = event.target.value;
  setQuery(input);
  fetchCitySuggestions(input); // Fetch suggestions
};

// Handle city selection
const handleCitySelect = (city) => {
  setSelectedCity(city); // Set selected city
  setQuery(city.name); // Update input with selected city
  setSuggestions([]); // Clear suggestions
};

  
  const handleClick = () => {
    setFavoriteIsOpen((prevState) => !prevState); // Toggle state
  };

  //handle unit toggle
  const handleUnits=()=>{
    if(unit=="celcius"){
      setUnit("fahrenheit");
    }else{
      setUnit("celcius");
    }
  }
  return (
    <div className="flex-horizontal align-center">
      <div className="flex-horizontal align-center outer-search relative">
      <div className="flex-horizontal align-center inner-search">
      
      <div className="flex-horizontal align-center city-search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="mh5 gray-text" />
      
      <input name="city-query" 
      type="text" 
      placeholder="City" 
      className="search-input" 
      onChange={handleInputChange}
      onClick={()=>setSerchBarIsOpen(!searchBarIsOpen)} 
      ref={inputRef}/>
      </div>
      
     <div className="favorite-city-outer relative">
     <div className="flex-horizontal align-center favorite-city-inner" onClick={handleClick} ref={favoriteInputRef}>
     <p className="mh3 gray-text">Favorite</p>
     
     <p className="mh3 gray-text"
     style={{transition: 'transform 0.1s ease',
      transform: favoriteIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',}}
     >
            <FontAwesomeIcon icon={faAngleDown} />
            </p>
     </div>
     {favoriteIsOpen &&
     <div className="favorite-city-dropdown absolute" ref={favoritedropdown}>
     <ul>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     </ul>
     </div>
     }
     </div>
     </div>
     { searchBarIsOpen &&
     <div className="city-search-dropdown absolute" ref={dropdownRef}>
     <ul>
     <li className="city-search-dropdown-item current-location-row flex-horizontal"><p>current location</p><p className="mh9"><FontAwesomeIcon icon={faLocationCrosshairs} /></p></li>
     {suggestions.map((cityname,index)=>
     <li className="city-search-dropdown-item" key={index}
     onClick={() => handleCitySelect(cityname.name)}>{cityname.name}</li>
     )
     }
     </ul>
     </div>
     }
      </div>
      <div className="buttons flex-horizontal align-center">
      <button className="get-btn btn">Get Weather</button>
      <button className="toggle-btn btn" onClick={handleUnits}>{unit}</button>
      </div>
    </div>
  )
};

export default SearchBar;
