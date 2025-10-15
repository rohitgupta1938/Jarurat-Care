import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-6xl mx-auto p-4 sm:p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </main>
      </div>
      <footer className="bg-white py-6 mt-10 border-t text-center text-gray-500 text-sm">
        Built with ❤️ by <span className="text-indigo-600 font-medium">Jarurat Care Team</span> © 2025
      </footer>
    </Router>
  );
}

export default App;