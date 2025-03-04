// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Timer from "./components/Timer";
import Gallery from "./components/Gallery";
import Intro from "./Intro"; // Importando a página de introdução
import "./App.css";

const App = () => {
  const startDate = "2024-01-07T21:44:00"; // Data do namoro

  return (
    <Router>
      <Routes>
        {/* Página de introdução */}
        <Route path="/" element={<Intro />} />

        {/* Página principal */}
        <Route
          path="/main-site"
          element={
            <div className="container">
              <iframe
              className="music-player"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/3iuC8v3WfFpMqQRg1NHDZM?utm_source=generator&theme=0"
              width="300"
              height="80"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify music player"  // Adicionei o título aqui
            ></iframe>


              <h1>Nosso Amor 💖</h1>
              <Timer startDate={startDate} />

              <div className="image-container">
                <Gallery />
              </div>

              <h2 style={{ color: "#ff5e99" }}>Eu te amo há:</h2>

              <p className="love-text">
                A cada dia que passa, meu coração se enche mais de carinho e
                admiração por você. Cada sorriso seu ilumina o meu mundo, e cada
                abraço me faz sentir que estou exatamente onde deveria estar. Você
                é a razão dos meus melhores pensamentos, e tudo ao seu lado se torna
                mais bonito e significativo. <br />
                Eu te amo para sempre ❤️
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
