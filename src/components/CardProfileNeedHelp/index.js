import React from "react";

import gotaBlueImg from "../../assets/images/gotaBlue.svg";
import seedImg from "../../assets/images/seedG.svg";
import brotoImg from "../../assets/images/brotoG.svg";
import flowerImg from "../../assets/images/flowerG.svg";
import profile4 from "../../assets/images/profile4.svg";
import profile5 from "../../assets/images/profile5.svg";
import profile6 from "../../assets/images/profile6.svg";
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
  Container,
} from "./styled";

function CardProfileNeedHelp() {
  return (
    <PageWrapper>
      <CardContainer>
        <CardWrapper/>
          <ImageMini src={profile4} alt="Photo"/>
          <Container>
            <TextName>Mara Fonseca</TextName>
            <TextAge>27 anos</TextAge>
            
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
          <ImageMini src={profile5} alt="Photo"/>
          <Container>
            <TextName>Ju Dantas</TextName>
            <TextAge>26 anos</TextAge>
            
            <Category>
              <img src={flowerImg} alt="Broto" />
              <TextCategory2>Liderança/Agile</TextCategory2>
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
          <ImageMini src={profile6} alt="Photo"/>
          <Container>
            <TextName>Bruna Assis</TextName>
            <TextAge>30 anos</TextAge>
            
            <Category>
              <img src={seedImg} alt="Broto" />
              <TextCategory3>Produto</TextCategory3>
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

export default CardProfileNeedHelp;