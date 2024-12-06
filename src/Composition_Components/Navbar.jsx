import React from "react"
import Header from "../Components/Header";
import CurrentCity from "../Components/CurrentCity";
import SearchBar from "../Components/SearchBar";
const Navbar = () => {
  return (
    <div className="flex-horizontal align-center navbar">
      <Header/>
      <CurrentCity/>
      <SearchBar/>
      
    </div>
  )
};

export default Navbar;
