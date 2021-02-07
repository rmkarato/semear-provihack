import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingImg = styled.img`
  height: 100%; 

  position: absolute;
  top: 0;
  right: 0;
`;

export const TextContainer = styled.div`
  z-index: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const TitleText = styled.p`
  font-size: 288px;
  font-weight: 700;

  margin: 0;
`;

export const SubtitleContainer = styled.div`
  font: 500 48px Quicksand;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    border-bottom: 1px solid #333333;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #333333;
    }
`;

export const ButtonSignup = styled.div`
    width: 300px;
    height: 86px;
    border-radius: 50px;

    background: #FAC358;
    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: #E1A531;
    }

    :active {
        background: #FAC358;
    }

    :disabled {
        background: #FCDDA0;
    }
`;

export const ButtonLinkSignup = styled(Link)`
    text-decoration: none;
    color: #333333;
    font-size: 28px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const LoginWrapper = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;