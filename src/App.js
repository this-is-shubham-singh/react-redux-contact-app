import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Addcontact from "./Components/Addcontact";
import Editcontact from "./Components/Editcontact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addcontact />} />
        <Route path="/edit/:id" element={<Editcontact />} />
      </Routes>
    </div>
  );
};

export default App;
