import React from "react"
import "./CurrentCity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="flex-horizontal align-center">
      <div className="flex-horizontal align-center outer-search relative">
      <div className="flex-horizontal align-center inner-search">
      <div className="flex-horizontal align-center city-search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="mh5 gray-text" />
      
      <input name="city-query" type="text" placeholder="City" className="search-input"/>
      </div>
      
     <div className="favorite-city-outer relative">
     <div className="flex-horizontal align-center favorite-city-inner">
     <p className="mh3 gray-text">Favorite</p>
     <p className="mh3 gray-text"><FontAwesomeIcon icon={faAngleDown} /></p>
     </div>
     <div className="favorite-city-dropdown absolute">
     <ul>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     <li className="favorite-city-dropdown-item flex-horizontal space-btwn"><p>Rushi</p><button style={{border:"none"}}>❌</button> </li>
     </ul>
     </div>
     </div>
     </div>
     <div className="city-search-dropdown absolute">
     <ul>
     <li className="city-search-dropdown-item">Mumbai</li>
     <li className="city-search-dropdown-item">Mumbai</li>
     <li className="city-search-dropdown-item">Mumbai</li>
     <li className="city-search-dropdown-item">Mumbai</li>
     </ul>
     </div>
      </div>
      <div className="buttons flex-horizontal align-center">
      <button className="get-btn btn">Get Weather</button>
      <button className="toggle-btn btn">Celcius</button>
      </div>
    </div>
  )
};

export default SearchBar;
