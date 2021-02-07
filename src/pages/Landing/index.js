import React from "react";

import landingImg from "../../assets/images/landing.svg" ;

import {
  PageWrapper,
  LandingImg,
  TextContainer,
  TitleText,
  SubtitleContainer,
  StyledLink,
  ButtonSignup,
  ButtonLinkSignup,
  LoginWrapper
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
          
          <div>
            <ButtonSignup>
              <ButtonLinkSignup to="/signup">
                CRIAR CONTA
              </ButtonLinkSignup>
            </ButtonSignup>
            
            <LoginWrapper>
              Já tem uma conta?
              <StyledLink to="/signup">
                Fazer login.
              </StyledLink>
            </LoginWrapper>
          </div>
        </TextContainer>
      </PageWrapper>
  );
};

export default Landing;