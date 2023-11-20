import "./sass/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
