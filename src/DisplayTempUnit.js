import React from "react";
import "./DisplayTempUnit.css";

export default function DisplayTempUnit() {
  return (
    <div>
      <i class="far-fa-sun"></i>
      <span class="celfarNumber" id="temperatureData">
        25
      </span>
      <span class="unit">
        <a herf="#" id="celcius-link" class="active">
          {" "}
          °C{" "}
        </a>{" "}
        |
        <a herf="#" id="farenheit-link">
          {" "}
          °F{" "}
        </a>
      </span>
    </div>
  );
}
