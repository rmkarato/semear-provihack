import styled from "styled-components";
import { Link } from "react-router-dom";

import { OutlinedInput } from "@material-ui/core";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #333333;
`;

export const RegisterTitle = styled.div`
    width: 100%;
    height: 88px;
    font-size: 37px;
    background: #FAC358;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const FormRegister = styled.div`
    width: 859px; 

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

export const TypeForm = styled.div`
    width: 634px;
    height: 557px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const RegisterText = styled.div`
    color: #333333;
    width: 859px;
    font-size: 28px;

    margin-top: 52px;
    margin-bottom: 52px;
`;

export const InputOutline = styled(OutlinedInput)`
    && {
        font-family: Quicksand;
        font-size: 22px;
        color: #333333;
        height: 58px;
        border: 1px solid #333333;
        border-radius: 20px;
    }

    &:focus {
        outline: none;
    }
`;

export const InputOutlineBig = styled(OutlinedInput)`
    && {
        font-family: Quicksand;
        font-size: 22px;
        color: #333333;
        height: 207px;
        border: 1px solid #333333;
        border-radius: 20px;
    }

    &:focus {
        outline: none;
    }
`;

export const Button = styled.div`
    width: 430px;
    height: 86px;
    border-radius: 50px;

    margin-top: 52px;
    margin-bottom: 52px;
    background: #FAC358;

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

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #333333;
    font-size: 28px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const PhotoProfile = styled.div`
    width: 190px;
    height: 190px;

    border: 1px solid #333333;
`;

export const FormChoose = styled.div`
    width: 920px;
`;
