import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Detail from "./components/Detail";
function App() {
  return (
    <Router>
      <div class="flex flex-col min-h-screen">
        <Navbar />
        <main class="flex-grow bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
