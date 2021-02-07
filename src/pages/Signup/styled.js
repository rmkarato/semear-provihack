import styled from "styled-components";
import { Link } from "react-router-dom";

import { OutlinedInput } from "@material-ui/core";

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #333333;
`;

export const SignInArea = styled.div`
    background-color: #FAC358;
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const SigninTitle = styled.div`
    width: 522px;
    height: 120px;

    font-size: 50px;
    font-weight: 700;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #333333;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const TextP = styled.p`
    text-align: center;
`;

export const TextPass = styled.p`
    text-align: center;
`;

export const FormSignup = styled.div`
    width: 522px; 
    height: 168px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const FormSignin = styled.div`
    width: 522px; 
    height: 264px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const SignupArea = styled.div`
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const SignupTitle = styled.div`
    width: 582px;
    height: 120px;

    font-size: 50px;
    font-weight: 700;

    color: #FAC358;
`;

export const SignupText = styled.div`
    width: 448px;
    height: 72px;

    font-size: 28px;
`;

export const Button = styled.div`
    width: 300px;
    height: 86px;
    border-radius: 50px;

    background: #333333;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: #242424;
    }

    :active {
        background: #333333;
    }

    :disabled {
        background: #777777;
    }
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #FAC358;
    font-size: 28px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
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

export const InputOutline = styled(OutlinedInput)`
    && {
        font-family: Quicksand;
        font-size: 22px;
        color: #333333;
        height: 72px;
        border: 2px solid #333333;
        border-radius: 20px;
        padding-left: 20px;
    }
`;