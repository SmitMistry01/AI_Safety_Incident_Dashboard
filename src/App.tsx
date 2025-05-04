import "./App.css";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import ReportIncident from "./components/pages/ReportIncident";
import Header from "./components/pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<ReportIncident />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
