import {
  HashRouter as Router, // Use HashRouter instead of BrowserRouter
  Link,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About'; // Import the About component
import React, { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [text, changetxt] = useState('Enable dark mode');
  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not?
  
  const toggleMode = () => {
    if (mode === 'light') {
      changetxt('Enable light mode');
      setmode('dark');
      document.body.style.backgroundColor = '#052c65';
      showAlert("Dark mode has been enabled", "success");
      // document.title="TextUtils-Dark Mode"
    } else {
      changetxt('Enable dark mode');
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title='TextUtils-Light Mode'
    }
  };

  return (
    <>  
      <Router> {/* Wrap your app in Router (HashRouter) */}
        <Navbar 
          title="TextUtils" 
          abouttext="About" 
          mode={mode} 
          toggleMode={toggleMode} 
          text={text} 
        />
        <Alert alert={alert} />
        <div className="container my-3"> 
          <Routes>
            <Route path="/" element={<Textform mode={mode} toggleMode={toggleMode} heading={`Try TextUtils-Word Counter, Character Counter, Remove extra spaces`} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} /> {/* Add a route for the About component */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
