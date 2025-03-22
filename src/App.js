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
              {/* Player do Spotify */}
              <iframe
                className="music-player"
                src="https://open.spotify.com/embed/track/3iuC8v3WfFpMqQRg1NHDZM?utm_source=generator&theme=0"
                width="300"
                height="80"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Music Player"
              ></iframe>

              <h1>Nosso Amor 💖</h1>
              <Timer startDate={startDate} />

              <div className="image-container">
                <Gallery />
              </div>

              <h2>Com Amor De Redzin...</h2>

              <p className="love-text">
                A Cada Dia Que Passa, Meu Coração Se Enche Mais De Carinho E
                Admiração Por Você. Cada Sorriso Seu Ilumina O Meu Mundo, E Cada
                Momento Com Você Me Faz Sentir Que Sou A Pessoa Mais Sortuda Deste Mundo Por Ter Você Comigo. Você
                É A Razão Dos Meus Melhores Pensamentos, E Tudo Ao Seu Lado Se Torna
                Mais Bonito E Significativo. <br />
                Eu Te Amo Para Sempre ❤️
              </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
