import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <p>Que bom te ver por aqui novamente!</p>
      <div>
        <label>E-mail</label>
        <input/>
      </div>
      <div>
        <label>Senha</label>
        <input/>
      </div>
      <Link to="/myprofile">
        ENTRAR
      </Link>
      <div>
        <p>Ainda não tem uma conta com a gente?</p>
        <p>Não tem problema, é só preencher as informações abaixo.</p>
      </div>
      <Link to="/register">
        CRIAR CONTA
      </Link>
    </div>
  );
};

export default Signup;