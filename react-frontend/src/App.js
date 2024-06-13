//import './App.css';
import './Styles.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Navbar from "./Controls/Navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

