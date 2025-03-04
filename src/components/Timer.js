import React, { useState, useEffect } from "react";

const Timer = ({ startDate }) => {
  const [timeTogether, setTimeTogether] = useState("");

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now - new Date(startDate);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeTogether(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div>
      <h2>Tempo de namoro:</h2>
      <h3>{timeTogether}</h3>
    </div>
  );
};

export default Timer;
