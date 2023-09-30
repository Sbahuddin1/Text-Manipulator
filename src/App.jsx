import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  };
  const toggle = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191919";
      showAlert(" Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "";
      showAlert(" Light mode enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Changer"
        navItem1="Home"
        navItem2="About"
        mode={mode}
        toggle={toggle}
      />

      <Alert
        alert={alert}
        // alert={
        //   <>
        //     <strong>Holy guacamole!</strong> You should check in on some of
        //     those fields below
        //   </>
        // }
      />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Enter Text to Analyze"
              mode={mode}
            />
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
