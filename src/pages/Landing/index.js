import React from "react";
import { Link } from "react-router-dom";

import landingImg from "../../assets/images/landing.svg" ;

import {
  PageWrapper,
  LandingImg,
  TextContainer,
  TitleText,
  SubtitleContainer
} from "./styled";

function Landing() {
  return (
      <PageWrapper>
        <LandingImg src={landingImg} alt="Semear"/>

        <TextContainer>
          <TitleText>SEMEAR</TitleText>

          <SubtitleContainer>
            <p>Conecte-se</p>
            <p>Aprenda</p>
            <p>Ensine</p>
          </SubtitleContainer>
          <Link to="/signup">
            CRIAR CONTA
          </Link>
          Já tem uma conta? 
          <Link to="/signup">
            Fazer login.
          </Link>
        </TextContainer>
      </PageWrapper>
  );
};

export default Landing;