import React from "react";

import landingImg from "../../assets/images/landing.svg" ;

import {
  PageWrapper,
  LandingImg,
  TextContainer,
  TitleText,
  AllContainer,
  SubtitleContainer,
  StyledLink,
  ButtonSignup,
  Container,
  ButtonLinkSignup,
  LoginWrapper
} from "./styled";

function Landing() {
  return (
      <PageWrapper>
        <LandingImg src={landingImg} alt="Semear"/>

        <TextContainer>
          <TitleText>SEMEAR</TitleText>

          <AllContainer>
            <SubtitleContainer>Conecte-se</SubtitleContainer>
            <SubtitleContainer>Aprenda</SubtitleContainer>
            <SubtitleContainer>Ensine</SubtitleContainer>
          </AllContainer>
          
          <Container>
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
          </Container>
        </TextContainer>
      </PageWrapper>
  );
};

export default Landing;