// src/Intro.js
import { useNavigate } from "react-router-dom"; // Para redirecionar após o clique
import "./Intro.css";

function Intro() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main-site"); // Redireciona para o site principal
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Surpresa Chegando...</h1>
        <p>Em breve, você vai ver algo especial!</p>
        <button className="intro-button" onClick={handleClick}>
          Clique para ver mais
        </button>
      </div>
    </div>
  );
}

export default Intro;
