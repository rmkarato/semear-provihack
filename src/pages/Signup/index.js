import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InputAdornment, IconButton, FormControl, OutlinedInput } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
  ButtonLink
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
            <OutlinedInput
              placeholder="E-mail"
              value={emailSignup}
              required
              type="email"
              onChange={handleUpdateEmailSignup}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              placeholder="Senha"
              value={passwordSignup}
              required
              type={showPassword ? "text" : "password"}
              onChange={handleUpdatePasswordSignup}
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
            <OutlinedInput
              placeholder="Name"
              value={name}
              required
              type="text"
              onChange={handleUpdateName}
            />
          </FormControl>
     
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              placeholder="E-mail"
              value={emailSignin}
              required
              type="email"
              onChange={handleUpdateEmailSignin}
            />
          </FormControl>
   
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              placeholder="Senha"
              value={passwordSignin}
              required
              type={showPassword ? "text" : "password"}
              onChange={handleUpdatePasswordSignin}
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
          <Button>
            <ButtonLink to="/register">
              CRIAR CONTA
            </ButtonLink>
          </Button>
        </div>
      </SignupArea>
    </PageWrapper>
  );
};

export default Signup;