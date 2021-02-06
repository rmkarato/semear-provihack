import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import landingImg from "../../assets/images/landing.svg" ;

import {
  PageWrapper,
  LandingImg,
  TextContainer,
  TitleText,
  SubtitleContainer
} from "./styled";

function Landing() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/signup");
    }, 3000);
  }, [history]);

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
        </TextContainer>
      </PageWrapper>
  );
};

export default Landing;