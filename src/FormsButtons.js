import React from "react";
import "./FormsButtons.css";

export default function FormsButtons() {
  return (
    <div class="row">
      <form id="search-form">
        <input
          type="text"
          class="form-control col-5"
          placeholder="Enter city"
          autofocus="on"
          id="cityNameInput"
          autocomplete="off"
        />
      </form>

      <input
        class="btn btn-primary col-2"
        type="submit"
        id="search-button"
        value="Enter"
      />

      <button class="btn btn-success col-2" id="current-location-button">
        Current
      </button>
    </div>
  );
}
