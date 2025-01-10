import "bootstrap/dist/css/bootstrap.min.css";
import { IoSearchOutline } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";
import "./App.css";
import { useState } from "react";

const api = {
  key: "4c1c3a610337cc4d898b06c46a01acd8",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [wether, setwether] = useState({});
  const hanldeSearchBtn = () => {
    fetch(`${api.base}weather?q=${searchValue}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setwether(result);
        console.log(result);
      });
  };
  return (
    <div className="container  ">
      <div className="row">
        <div className="col-12 text-light text-center mt-2 ">
          <h2 className="FontFamily fw-semibold">Weather App</h2>
        </div>
      </div>

      <div className="row mt-4   ">
        <div className="input-group mb-3   InputField">
          <input
            type="text"
            placeholder="Enter City/Town"
            className="form-control INPUT"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          
          <button className=" Button" onClick={hanldeSearchBtn}>
            search
            
          </button>
        </div>
          <p className="Valid"> Note : Please enter valid city  name </p>
      </div>

      {typeof wether.main != "undefined" ? (
        <div className="row ">
          <div className="col-12 text-center">
            <h3 className=" text-light result FontFamily">
             Temperature : {wether.main.temp} Celcius <br />
              <br />
               <TiWeatherCloudy />  : {wether.weather[0].description}
            </h3>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
