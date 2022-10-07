import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import Header from "./components/Header";
import axios from "axios";
import AppContext from "./context";

function App() {
  const [currText, setCurrText] = useState("");
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  //setData
  function setData(newData) {
    setCity(newData.city);
    setTemperature(newData.temperature);
    setDescription(newData.description);
    setCountry(newData.country);
    setCurrText("");
    setLoading(false);
  }

  //fetchTemperature
  async function fetchData(city) {
    setLoading(true);
    try {
      let response = await axios("/api", {
        params: {
          city: city,
        },
      });
      let data = await response.data;
      setData({
        city: city,
        temperature: `${data.main.temp} ℃`,
        description: data.weather[0].main,
        country: data.sys.country,
      });
    } catch (error) {
      setData({
        city: "No such city",
        temperature: ``,
        description: "",
        country: "",
      });
    }
  }

  // firstTimeLoad;
  useEffect(() => {
    //fetch current location weather
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let response = await axios("/api/latlong", {
          params: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
        });
        let data = await response.data;
        setData({
          city: data.name,
          temperature: `${data.main.temp} ℃`,
          description: data.weather[0].main,
          country: data.sys.country,
        });
      });
    } catch (error) {
      setData({
        city: "No such city",
        temperature: ``,
        description: "",
        country: "",
      });
    }
    // eslint-disable-next-line
  }, []);

  //onClick
  function onClick(e) {
    e.preventDefault();
    if (currText === "") {
      setData({
        city: "Please enter a city",
        temperature: ``,
        description: "",
        country: "",
      });
    } else fetchData(currText);
  }

  //onChange
  function onChange(e) {
    setCurrText(e.target.value);
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          currText,
          onChange,
          onClick,
          city,
          temperature: `${temperature} `,
          description,
          country,
          loading,
        }}
      >
        <Header />
        <Display />
      </AppContext.Provider>
    </div>
  );
}

export default App;
