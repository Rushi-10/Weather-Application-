import React from "react"

const WeatherDetails = () => {
  return (
    <div className="mainbox">
      <div className="weatherbox">
      <div className="first-column column">
      <div className="box1">
      <div className="flex-horizontal space-btwn mt20">
      <p className="city-name-fb">Mumbai</p>
      <p className="today-fb">Today</p>
      </div>
      <div className="borderline"></div>
      <div className="cels&-image flex-horizontal mt40 space-evenly">
      <h1>25* C</h1>
      <h1>🌞</h1>
      </div>
      </div>
      <div className="box2">
      <div className="box2-row flex-horizontal space-around "><p>Humidity</p><p>84</p></div>
      <div className="box2-row flex-horizontal space-around "><p>Feels Like</p><p>98</p></div>
      <div className="box2-row flex-horizontal space-around"><p>Pressure</p><p>03</p></div>
      <div className="borderline"></div>
      <div className="description">Description:</div>
      </div>
      </div>
      <div className="second-column box3 column">
      <div className="box3-heading mh9 mt10 gray-text">5 days forecast weather</div>
      <div className="borderlinefull"></div>
      <div className="box3-rows-container">
      <div className="box3-row flex-horizontal space-around"><h4>22-03-2022</h4><p>🌞</p><p>33c</p></div>
      <div className="box3-row flex-horizontal space-around"><h4>22-03-2022</h4><p>🌞</p><p>33c</p></div>
      <div className="box3-row flex-horizontal space-around"><h4>22-03-2022</h4><p>🌞</p><p>33c</p></div>
      <div className="box3-row flex-horizontal space-around"><h4>22-03-2022</h4><p>🌞</p><p>33c</p></div>
      <div className="box3-row flex-horizontal space-around"><h4>22-03-2022</h4><p>🌞</p><p>33c</p></div>

      </div>
      </div>
      </div>
    </div>
  )
};

export default WeatherDetails;
