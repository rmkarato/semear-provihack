import React, { useState } from "react";

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import seedImg from "../../assets/images/seed.svg";
import brotoImg from "../../assets/images/broto.svg";
import flowerImg from "../../assets/images/flower.svg";
import gotaImg from "../../assets/images/gota.svg";
import smileImg from "../../assets/images/smile.svg";

import { 
  PageWrapper,
  FindTitle,
  Sidebar,
  MainContainer,
  PhotoSidebar,
  MenuSidebar,
  TitleText,
  StyledLink,
  FilterTitle,
  ImgContainer,
  ProfileText,
  RadioWrapper,
  RadioInput,
  LabelRadio,
  AskHelpWrapper,
  ImgRating,
  Text
} from "./styled";

import CardProfileOfferHelp from "../../components/CardProfileOfferHelp";
import CardProfileNeedHelp from "../../components/CardProfileNeedHelp";

function Profile() {
  const [askHelp, setAskHelp] = useState("true");
  const [offerHelp, setOfferHelp] = useState("true");
  const [level, setLevel] = useState(true);

  const handleUpdateAskHelp = (event) => {
    setAskHelp(event.target.value);
  };

  const handleUpdateOfferHelp = (event) => {
    setOfferHelp(event.target.value);
  };

  const handleUpdateLevel  = (event) => {
    setLevel(event.target.value);
  };

  return (
    <PageWrapper>
      <FindTitle><Text>Deu Match!! <img src={smileImg} alt="Smile Face"/></Text></FindTitle>
      <Sidebar>
        <PhotoSidebar/>
        <MenuSidebar>
          <TitleText>Giovanna</TitleText>
          <StyledLink to="/edit">
            <p><SettingsOutlinedIcon/> Edite Seu Perfil</p>
          </StyledLink>

          <StyledLink to="/chat">
            <p><PeopleAltOutlinedIcon/> Minhas Semeadoras</p>
          </StyledLink>
          <StyledLink to="/suporte">
            <p><HelpOutlineOutlinedIcon/> FAQ/Suporte</p>
          </StyledLink>
          <StyledLink to="/">
            <p><ExitToAppOutlinedIcon/> Log Out</p>
          </StyledLink>
        </MenuSidebar>

        <FilterTitle>Preciso de ajuda para:</FilterTitle>
        
        <AskHelpWrapper>
          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={askHelp}
              onChange={handleUpdateAskHelp}
            /> 
            <LabelRadio>Revisão de Currículo</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={askHelp}
              onChange={handleUpdateAskHelp}
            /> 
            <LabelRadio>Revisão de Portifólio</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={askHelp}
              onChange={handleUpdateAskHelp}
            /> 
            <LabelRadio>Simulação de Entrevista</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={askHelp}
              onChange={handleUpdateAskHelp}
            /> 
            <LabelRadio>Ajuda Técnica</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={askHelp}
              onChange={handleUpdateAskHelp}
            /> 
            <LabelRadio>Conversas Sobre Carreira</LabelRadio>
          </RadioWrapper>
        </AskHelpWrapper>

        <FilterTitle>Eu ofereço ajuda para:</FilterTitle>
        <AskHelpWrapper>
          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={offerHelp}
              onChange={handleUpdateOfferHelp}
            /> 
            <LabelRadio>Revisão de Currículo</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={offerHelp}
              onChange={handleUpdateOfferHelp}
            /> 
            <LabelRadio>Revisão de Portifólio</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={offerHelp}
              onChange={handleUpdateOfferHelp}
            /> 
            <LabelRadio>Simulação de Entrevista</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={offerHelp}
              onChange={handleUpdateOfferHelp}
            /> 
            <LabelRadio>Ajuda Técnica</LabelRadio>
          </RadioWrapper>

          <RadioWrapper>
            <RadioInput
              type="radio"
              name="help"
              value={askHelp}
              onChange={handleUpdateOfferHelp}
            /> 
            <LabelRadio>Conversas Sobre Carreira</LabelRadio>
          </RadioWrapper>
        </AskHelpWrapper>

        <FilterTitle>Nível:</FilterTitle>
          <ImgContainer>
            <RadioWrapper>
              <RadioInput
                type="radio"
                name="help"
                value={level}
                onChange={handleUpdateLevel}
              /> 
              <img src={seedImg} alt="Semente"/>
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                type="radio"
                name="help"
                value={level}
                onChange={handleUpdateLevel}
              /> 
              <img src={brotoImg} alt="Broto"/>
            </RadioWrapper>
            <RadioWrapper>
              <RadioInput
                type="radio"
                name="help"
                value={level}
                onChange={handleUpdateLevel}
              /> 
              <img src={flowerImg} alt="Flor"/>
            </RadioWrapper>
          </ImgContainer>

        <FilterTitle>Avaliação:</FilterTitle>
          <ImgRating>
            <img src={gotaImg} alt="Gota" />
            <img src={gotaImg} alt="Gota" />
            <img src={gotaImg} alt="Gota" />
            <img src={gotaImg} alt="Gota" />
            <img src={gotaImg} alt="Gota" />
          </ImgRating>
      </Sidebar>

      <MainContainer>
        <ProfileText>Semeadoras que podem te ajudar:</ProfileText>
        <CardProfileOfferHelp/>

        <ProfileText>Semeadoras que precisam da sua ajuda:</ProfileText>
        <CardProfileNeedHelp/>
      </MainContainer>
    </PageWrapper>
  );
};

export default Profile;