import './App.css';
import './Styles.css';
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Navbar from "./Controls/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

     return (
         <>
             <Navbar />
             {component}
         </>
     );
}

