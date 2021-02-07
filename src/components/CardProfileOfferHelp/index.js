import React from "react";

import gotaBlueImg from "../../assets/images/gotaBlue.svg";
import seedImg from "../../assets/images/seedG.svg";
import brotoImg from "../../assets/images/brotoG.svg";
import flowerImg from "../../assets/images/flowerG.svg";
import profile1 from "../../assets/images/profile1.svg";
import profile2 from "../../assets/images/profile2.svg";
import profile3 from "../../assets/images/profile3.svg";
import ModalProfile from "../ModalProfile";

import {
  PageWrapper,
  CardContainer,
  CardWrapper,
  ImageMini,
  TextName,
  TextAge,
  Category,
  TextCategory1,
  TextCategory2,
  TextCategory3,
  HelpContainer,
  HelpWrapper,
  TextNumber,
  TextHelp,
  ImgRating,
  Button,
  Container
} from "./styled";


function CardProfileOfferHelp() {
  return (
    <PageWrapper>
      <CardContainer>
        <CardWrapper/>
          <ImageMini src={profile1} alt="Photo"/>
          <Container>
            <TextName>Lu Correia</TextName>
            <TextAge>28 anos</TextAge>
            
            <Category>
              <img src={brotoImg} alt="Broto" />
              <TextCategory1>Produto</TextCategory1>
            </Category>

            <HelpContainer>
              <HelpWrapper>
                <TextNumber>10</TextNumber><TextHelp>Ajudas Concedidas</TextHelp>
              </HelpWrapper>

              <HelpWrapper>
                <TextNumber>04</TextNumber><TextHelp>Ajudas Recebidas</TextHelp>
              </HelpWrapper>
            </HelpContainer>
            <ImgRating>
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
            </ImgRating>

            <Button>
              <ModalProfile />
            </Button>
          </Container>
      </CardContainer>

      <CardContainer>
        <CardWrapper/>
          <ImageMini src={profile2} alt="Photo"/>
          <Container>
            <TextName>Ana Dutra</TextName>
            <TextAge>30 anos</TextAge>
            
            <Category>
              <img src={flowerImg} alt="Broto" />
              <TextCategory2>Desenvolvimento</TextCategory2>
            </Category>

            <HelpContainer>
              <HelpWrapper>
                <TextNumber>07</TextNumber><TextHelp>Ajudas Concedidas</TextHelp>
              </HelpWrapper>

              <HelpWrapper>
                <TextNumber>03</TextNumber><TextHelp>Ajudas Recebidas</TextHelp>
              </HelpWrapper>
            </HelpContainer>
            <ImgRating>
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
            </ImgRating>

            <Button>
              <ModalProfile />
            </Button>
          </Container>
      </CardContainer>

      <CardContainer>
        <CardWrapper/>
          <ImageMini src={profile3} alt="Photo"/>
          <Container>
            <TextName>Beatriz Cortez</TextName>
            <TextAge>40 anos</TextAge>
            
            <Category>
              <img src={seedImg} alt="Broto" />
              <TextCategory3>UX/UI Design</TextCategory3>
            </Category>

            <HelpContainer>
              <HelpWrapper>
                <TextNumber>10</TextNumber><TextHelp>Ajudas Concedidas</TextHelp>
              </HelpWrapper>

              <HelpWrapper>
                <TextNumber>06</TextNumber><TextHelp>Ajudas Recebidas</TextHelp>
              </HelpWrapper>
            </HelpContainer>
            <ImgRating>
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
                <img src={gotaBlueImg} alt="Gota" />
            </ImgRating>

            <Button>
              <ModalProfile />
            </Button>
          </Container>
      </CardContainer>
      
    </PageWrapper>
  );
};

export default CardProfileOfferHelp;