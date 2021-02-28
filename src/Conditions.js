import React from "react";
import "./Conditions.css";

export default function Conditions() {
  return (
    <ul>
      <li>
        Description: <span id="description"> </span>
      </li>
      <li>
        Humidity: <span id="humidity"> </span>%
      </li>
      <li>
        Wind: <span id="wind"> </span> km/h
      </li>
    </ul>
  );
}
