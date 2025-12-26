import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Profil from "./pages/Profile";
import Program from "./pages/Program";
import Asatidz from "./pages/Asatidz";
import Galeri from "./pages/Galeri";
import Sodaqoh from "./pages/Sodaqoh";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/program" element={<Program />} />
          <Route path="/asatidz" element={<Asatidz />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/sodaqoh" element={<Sodaqoh />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
