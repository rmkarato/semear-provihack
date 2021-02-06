import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignInArea = styled.div`
    background-color: #c4c4c4;
    width: 50%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const SigninTitle = styled.p`
    width: 522px;
    height: 120px;

    font-size: 50px;
    font-weight: 700;
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
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #F8F8F8;
    font-size: 28px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;