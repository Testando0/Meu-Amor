import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg",
  "/foto6.jpg",
  "/foto7.jpg",
  "/foto8.jpg",
  "/foto9.jpg",
  "/foto10.jpg",
  "/foto11.jpg",
  "/foto12.jpg"
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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