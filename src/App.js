import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
