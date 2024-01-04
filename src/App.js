import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <body>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
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
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src="https://openweathermap.org/img/wn/04n@2x.png"
                    alt="S"
                    id="icon"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature">19</strong>
                    <span className="units"> °C </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
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
