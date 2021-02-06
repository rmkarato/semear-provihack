import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InputAdornment, IconButton, FormControl } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {
  PageWrapper,
  SignInArea,
  SigninTitle,
  SignupArea,
  SignupTitle,
  FormSignup,
  FormSignin,
  SignupText,
  Button,
  ButtonLink,
  InputOutline,
  ButtonSignup,
  ButtonLinkSignup,
} from "./styled";

function Signup() {
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [name, setName] = useState("");
  const [emailSignin, setEmailSignin] = useState("");
  const [passwordSignin, setPasswordSignin] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleUpdateEmailSignup = (event) => {
    setEmailSignup(event.target.value);
  };

  const handleUpdatePasswordSignup = (event) => {
    setPasswordSignup(event.target.value);
  };

  const handleUpdateName = (event) => {
    setName(event.target.value);
  };

  const handleUpdateEmailSignin = (event) => {
    setEmailSignin(event.target.value);
  };

  const handleUpdatePasswordSignin = (event) => {
    setPasswordSignin(event.target.value);
  };

  return (
    <PageWrapper>
      <SignInArea>
        <SigninTitle>Que bom te ver por aqui novamente!</SigninTitle>

        <FormSignup>
          <FormControl fullWidth variant="outlined">
            <InputOutline
              placeholder="E-mail"
              value={emailSignup}
              required
              type="email"
              onChange={handleUpdateEmailSignup}
              startAdornment={
                <EmailOutlinedIcon/>
              }
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <InputOutline
              placeholder="Senha"
              value={passwordSignup}
              required
              type={showPassword ? "text" : "password"}
              onChange={handleUpdatePasswordSignup}
              startAdornment={
                <LockOutlinedIcon/>
              }
              endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </FormSignup>

        <div>
          <Link to="/resetpassword">
            Esqueci a senha
          </Link><br/>
          <Button>
            <ButtonLink to="/myprofile">
              ENTRAR
            </ButtonLink>
          </Button>
        </div>
      </SignInArea>

      <SignupArea>
          <SignupTitle>Ainda não tem uma conta com a gente?</SignupTitle>
          <SignupText>Não tem problema, é só preencher as informações abaixo.</SignupText>
          
          <FormSignin>
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
              placeholder="E-mail"
              value={emailSignin}
              required
              type="email"
              onChange={handleUpdateEmailSignin}
              startAdornment={
                <EmailOutlinedIcon/>
              }
            />
          </FormControl>
   
          <FormControl fullWidth variant="outlined">
            <InputOutline
              placeholder="Senha"
              value={passwordSignin}
              required
              type={showPassword ? "text" : "password"}
              onChange={handleUpdatePasswordSignin}
              startAdornment={
                <LockOutlinedIcon/>
              }
              endAdornment ={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </FormSignin>

        <div>
          <ButtonSignup>
            <ButtonLinkSignup to="/register">
              CRIAR CONTA
            </ButtonLinkSignup>
          </ButtonSignup>
        </div>
      </SignupArea>
    </PageWrapper>
  );
};

export default Signup;