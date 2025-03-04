import React, { useState, useEffect } from "react";
import "./Gallery.css"; // Certifique-se de ter os estilos corretos

const images = ["/foto1.jpg", "/foto2.jpg", "/foto3.jpg", 
  "/foto4.jpg", "/foto5.jpg", "/foto6.jpg", "/foto7.jpg", "/foto8.jpg", "/foto9.jpg", "/foto10.jpg",
  "/foto11.jpg", "/foto12.jpg"];

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

