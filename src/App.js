import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import ContactUs from "./Components/ContactUs";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          header="Portfolio"
          home="home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm heading="Text Analyser" mode={mode} />}
            ></Route>
            <Route
              exact
              path="/about"
              element={<About heading="About Us" mode={mode} />}
            ></Route>
            <Route
              exact
              path="/contact"
              element={<ContactUs mode={mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
