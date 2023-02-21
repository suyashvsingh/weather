import React, { useContext } from "react";
import AppContext from "../context";
import ClipLoader from "react-spinners/ClipLoader";

export default function Display() {
  const { temperature, description, city, country, loading } =
    useContext(AppContext);

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  return (
    <div className="display">
      <div className="display--card">
        {loading ? (
          <ClipLoader color="#3e5262" loading={loading} />
        ) : (
          <>
            <div className="curr--temperature">{temperature}</div>
            <div className="curr--description">{description.toLowerCase()}</div>
            <div className="curr--city">
              {city.toLowerCase()} {getFlagEmoji(country)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
