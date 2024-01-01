import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  return (
    <div className="Weather">
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter your city..."
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
    </div>
  );
}
