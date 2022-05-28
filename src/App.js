import { Route, Routes } from "react-router";
import "./App.css";
import { Favourite, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
