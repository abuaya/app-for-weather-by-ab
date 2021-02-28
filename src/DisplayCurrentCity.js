import React from "react";
import "./DisplayCurrentCity.css";

export default function DisplayCurrentCity() {
  return (
    <div>
      <span class="CurrentTemperture"> The current temperture in: </span>
      <h2>
        <div class="col-10 cityName" id="displayCity">
          Sydney
        </div>
      </h2>
    </div>
  );
}
