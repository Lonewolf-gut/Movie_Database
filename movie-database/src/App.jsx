import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div class="flex flex-col min-h-screen">
        <Navbar />
        <main class="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
