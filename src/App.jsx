import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  Home,
  Metroville,
  RiverCity,
  CoastalTown,
  NewTown,
  Barra,
  Norute,
  Park,
  Art,
  Ride,
  Views,
  Roast,
} from "./Componentes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Barra />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Metroville" element={<Metroville />}>
          <Route path="park" element={<Park />} />
          <Route path="art" element={<Art />} />
        </Route>

        <Route path="/RiverCity" element={<RiverCity />}>
          <Route path="park" element={<Ride />} />
          <Route path="art" element={<Views />} />
        </Route>

        <Route path="/CoastalTown" element={<CoastalTown />}>
          <Route path="roast" element={<Roast/>} />
        </Route>
        
        <Route path="*" element={<Norute />} />
      </Routes>
    </div>
  );
}

export default App;
