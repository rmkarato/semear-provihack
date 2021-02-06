import React from "react";
import { Link } from "react-router-dom";

function MyProfile() {
  return (
    <div>
      <div>
        <div>
          <h3>Giovanna</h3>
          <Link to="/register">
              Edite seu Perfil
          </Link>
          <Link to="/support">
              FAQ/Supporte
          </Link>
          <Link to="/">
              Logout
          </Link>
        </div>

        <div>
          <h5>Hoje eu preciso de:</h5>
          <input 
            type="radio"
          />
          <label>Revisão de currículo</label>
          <input 
            type="radio"
          />
          <label>Revisão de portifólio</label>
          <input 
            type="radio"
          />
          <label>Simulação de entrevista</label>
          <input 
            type="radio"
          />
          <label>Ajuda técnica</label>
          <input 
            type="radio"
          />
          <label>Orientação de carreira</label>
        </div>

        <div>
          <h5>Hoje eu ofereço:</h5>
          <input 
            type="radio"
          />
          <label>Revisão de currículo</label>
          <input 
            type="radio"
          />
          <label>Revisão de portifólio</label>
          <input 
            type="radio"
          />
          <label>Simulação de entrevista</label>
          <input 
            type="radio"
          />
          <label>Ajuda técnica</label>
          <input 
            type="radio"
          />
          <label>Orientação de carreira</label>
        </div>
      </div>

      <div>
        Card 
        <Link to="/profile">
          Ver Perfil
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;