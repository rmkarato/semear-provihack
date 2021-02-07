import React, { useState } from "react";

import {
  PageWrapper,
  RegisterTitle,
  FormRegister,
  RegisterText,
  InputOutline,
  InputOutlineBig,
  Button,
  ButtonLink,
  PhotoProfile,
  TypeForm,
  FormChoose
} from "./styled";

import { FormControl } from "@material-ui/core";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

function Register() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portifolio, setPortifolio] = useState("");

  const handleUpdateName = (event) => {
    setName(event.target.value);
  };

  const handleUpdateBirthday = (event) => {
    setBirthday(event.target.value);
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdateAbout = (event) => {
    setAbout(event.target.value);
  };

  const handleUpdateLinkedin = (event) => {
    setLinkedin(event.target.value);
  };

  const handleUpdatePortifolio = (event) => {
    setPortifolio(event.target.value);
  };

  return (
    <PageWrapper>
      <RegisterTitle>Meu Cadastro</RegisterTitle>

        <RegisterText>Informações Pessoais:</RegisterText>
        
        <FormRegister>
          <div>
            <PhotoProfile>

            </PhotoProfile>
            <p>Adicionar Foto</p>
          </div>

          <TypeForm>
            <FormControl fullWidth variant="outlined">
              <InputOutline
                placeholder="Nome"
                value={name}
                required
                type="text"
                onChange={handleUpdateName}
                startAdornment={
                  <AccountCircleOutlinedIcon/>
                }
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputOutline
                placeholder="Data de Nascimento"
                value={birthday}
                required
                type="date"
                onChange={handleUpdateBirthday}
                startAdornment={
                  <CakeOutlinedIcon/>
                }
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
                <InputOutline
                  placeholder="E-mail"
                  value={email}
                  required
                  type="email"
                  onChange={handleUpdateEmail}
                  startAdornment={
                    <EmailOutlinedIcon/>
                  }
                />
              </FormControl>
            
            <FormControl fullWidth variant="outlined">
              <InputOutlineBig
                placeholder="Fale Um Pouco Sobre Você"
                value={about}
                required
                type="text"
                onChange={handleUpdateAbout}
                startAdornment={
                  <SentimentSatisfiedOutlinedIcon/>
                }
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputOutline
                placeholder="Link do Seu Linkedin"
                value={linkedin}
                type="text"
                onChange={handleUpdateLinkedin}
                startAdornment={
                  <LinkOutlinedIcon/>
                }
              />
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputOutline
                placeholder="Link do Seu Portifólio"
                value={portifolio}
                type="text"
                onChange={handleUpdatePortifolio}
                startAdornment={
                  <LinkOutlinedIcon/>
                }
              />
            </FormControl>
          </TypeForm>
      </FormRegister>

      <FormChoose>
        <RegisterText>Áreas de Atuação:</RegisterText>
        <label>Produto</label>
        <label>Tecnologia / Desenvolvimento</label>
        <label>Design</label>
        <label>Liderança/Agile</label>

        <RegisterText>Posso oferecer mentorias em:</RegisterText>
        <label>Revisão de Currículo / Portifólio</label>
        <label>Simulação de Entrevista</label>
        <label>Orientação de Carreira</label>
        <label>Ajuda Técnica</label>

        <RegisterText>Preciso de mentorias em:</RegisterText>
        <label>Revisão de Currículo / Portifólio</label>
        <label>Simulação de Entrevista</label>
        <label>Orientação de Carreira</label>
        <label>Ajuda Técnica</label>
      </FormChoose>


      <div>
        <Button>
          <ButtonLink to="/profile">
            SALVAR INFORMAÇÕES
          </ButtonLink>
        </Button>
      </div>
    </PageWrapper>
  );
};

export default Register;