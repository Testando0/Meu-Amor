import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const LoveTimer = () => {
  const [timeTogether, setTimeTogether] = useState("");
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio("/love-song.mp3"));

  useEffect(() => {
    const startDate = new Date("2020-05-15T00:00:00"); // Data do namoro

    const updateTimer = () => {
      const now = new Date();
      const diff = now - startDate;
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeTogether(`${years} anos, ${months} meses, ${days} dias, ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-pink-600">Juntos há:</h1>
        <p className="text-xl text-gray-800 mt-2">{timeTogether}</p>
        <button
          onClick={toggleMusic}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-red-600"
        >
          {playing ? "Pausar Música" : "Tocar Música"}
        </button>
      </motion.div>
      <div className="fixed bottom-0 flex space-x-4 p-4">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <FaHeart className="text-red-500 text-3xl animate-bounce" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoveTimer;
