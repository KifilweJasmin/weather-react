import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <body>
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <Weather />
            <div class="overview">
              <h1 id="city">Weather App</h1>
              <ul>
                <li>
                  Last updated: Tuesday 10:00 <span id="date"></span>
                </li>
                <li id="description">Cloudy</li>
              </ul>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="d-flex weather-temperature">
                  <img
                    src="https://openweathermap.org/img/wn/04n@2x.png"
                    alt="S"
                    id="icon"
                    class="float-left"
                  />
                  <div class="float-left">
                    <strong id="temperature">19</strong>
                    <span class="units"> °C </span>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">80</span> %
                  </li>
                  <li>
                    Wind: <span id="wind">10</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/KifilweJasmin/my-weather-app-updated"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by KifilweJasmin
          </small>
        </div>
      </div>

      <script src="src/index.js"></script>
    </body>
  );
}

export default App;
