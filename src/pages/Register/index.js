import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h3>Meu Cadastro</h3>

      <h3>Informaçõe Pessoais:</h3>
      <label>Nome/Apelido:</label>
      <input /> <br/>
      <label>Data de nascimento:</label>
      <input /> <br/>
      <label>Sobre você:</label>
      <input /> <br/>
      <label>Currículo:</label>
      <button>Anexar</button> <br />
      <label>Portifólio:</label>
      <input /> <br/>

      <h3>Áreas de Atuação:</h3>
      <label>Produto</label>
      <label>Tecnologia / Desenvolvimento</label>
      <label>Design</label>
      <label>Liderança/Agile</label>

      <h3>O que eu preciso:</h3>
      <label>Revisão de Currículo / Portifólio</label>
      <label>Simulação de Entrevista</label>
      <label>Orientação de Carreira</label>
      <label>Ajuda Técnica</label>

      <h3>O que eu ofereço:</h3>
      <label>Revisão de Currículo / Portifólio</label>
      <label>Simulação de Entrevista</label>
      <label>Orientação de Carreira</label>
      <label>Ajuda Técnica</label>

      <Link to="/profile">
        Salvar informações
      </Link>
    </div>
  );
};

export default Register;