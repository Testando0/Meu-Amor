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
        <p>Uma Forma De Te Demonstrar Um Pouco Do Meu Amor...</p>
        <button className="intro-button" onClick={handleClick}>
          Clique Aqui
        </button>
      </div>
    </div>
  );
}

export default Intro;
