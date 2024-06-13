import './App.css';
import './Styles.css';
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Navbar from "./Controls/Navbar";

export default function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <App />
            break
        case "/Home":
            component = <Home />
            break
        case "/Introduction":
            component = <Introduction />
            break
        default:
            break
    }

    return (
        <>
            <Navbar />
            {component}
        </>
    );
}

