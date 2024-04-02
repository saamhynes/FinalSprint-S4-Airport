import "./App.css";

// Components
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import Arrivals from "./components/Arrivals";
import Departures from "./components/Departures";
import Destinations from "./components/Destinations";

// Routes/Links
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/arrivals" element={<Arrivals />} />
          <Route path="/departures" element={<Departures />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
