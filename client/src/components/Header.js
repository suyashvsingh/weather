import React, { useEffect, useContext } from "react";
import AppContext from "../context";
import { useRef } from "react";

export default function Header() {
  const { onClick, currText, onChange } = useContext(AppContext);

  const referenceInputBox = useRef();

  useEffect(() => {
    referenceInputBox.current.focus();
  }, []);

  return (
    <div className="header">
      <h2>WeatherApp</h2>
      <form className="inputArea" onSubmit={onClick}>
        <input
          className="inputBox"
          type="text"
          id="inputBox"
          placeholder="enter city"
          value={currText}
          onChange={onChange}
          ref={referenceInputBox}
        ></input>
        <button className="submit">submit</button>
      </form>
    </div>
  );
}
