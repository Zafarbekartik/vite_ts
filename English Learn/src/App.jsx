import { Route, Routes } from "react-router-dom";
import "./App.css";
import English from "./Components/English/English";
import Home from "./Pages/Home/Home";
import BreadCrumbs from "./Components/BreadCrumbs/BreadCrumbs";
import Lesson01 from "./Pages/Leeson01/Lesson1";
import Lesson02 from "./Pages/Lesson02/Lesson02";

function App() {
  // const { uuid } = require("uuidv4");

  return (
    <div className="App">
      <English />
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lesson 01/*" element={<Lesson01 />} />
        <Route path="/Lesson 02" element={<Lesson02 />} />
      </Routes>
    </div>
  );
}

export default App;
