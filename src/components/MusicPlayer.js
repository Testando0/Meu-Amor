import React from "react";

const MusicPlayer = ({ musicSrc }) => {
  return (
    <div className="music-player">
      <h2>Música de Fundo</h2>
      <audio controls autoPlay loop>
      <source src="/love-song.mp3" type="audio/mp3" />
      Seu navegador não suporta áudio.
    </audio>
    </div>
  );
};

export default MusicPlayer;
