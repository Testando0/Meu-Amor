import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Certifique-se de ter os estilos corretos

const images = ["/foto1.jpeg", "/foto2.jpeg", "/foto3.jpeg", 
  "/foto4.jpeg", "/foto5.jpeg", "/foto6.jpeg", "/foto7.jpeg", "/foto8.jpeg", "/foto9.jpeg", "/foto10.jpeg",
  "/foto11.jpeg", "/foto12.jpeg"];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Tempo para o fade-out antes de trocar a imagem
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []); // 🔥 Removi `images.length` daqui

  return (
    <div className="gallery-container">
      <img
        src={images[currentIndex]}
        alt="Memórias"
        className={`fade-image ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
};

export default Gallery;

