import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ('#183D3D');
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ('white');
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <div className={`text-${mode === 'light' ? 'dark' : 'light'}`}>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container">
            {/* <Routes>
              <Route exact path="/About" element={<About />}/>
              <Route exact path="/" element={<TextForm heading="Enter the Text here" mode={mode} showAlert={showAlert} />} />
            </Routes> */}
            <TextForm heading="Enter the Text here" mode={mode} showAlert={showAlert} />
          </div>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;