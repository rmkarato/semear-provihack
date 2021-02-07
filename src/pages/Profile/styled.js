import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #333333;
`;

export const FindTitle = styled.div`
    width: 100%;
    height: 88px;
    font-size: 37px;
    background: #FAC358;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Sidebar = styled.div`
    background: #333333;
    width: 25%;
    position: absolute;
    left: 0;
    top: 88px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const MainContainer = styled.div`
    width: 75%;
    margin-left: 25%;
`;

export const PhotoSidebar = styled.div`
    background: #FFFFFF;
    width: 150px;
    height: 150px;
    border-radius: 100%;

    margin-top: 80px;
    margin-bottom: 25px;
`;

export const MenuSidebar = styled.div`
    color: #FFFFFF;

    font-size: 24px;
`;

export const TitleText = styled.p`
    text-align: center;

    font-size: 30px;
    font-weight: 700;

    margin-bottom: 50px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #FFFFFF;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledButton = styled.button`
    font: Quicksand;
    text-decoration: none;
    color: #FFFFFF;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #FFFFFF;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const FilterTitle = styled.p`
    width: 100%;
    height: 49px;

    background: #F8F8F8;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 21px;
    color: #333333;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 85%;

    padding-left: 70px;
    padding-right: 70px;
`;

export const ImgRating = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;

    padding-left: 70px;
    padding-right: 70px;
    padding-bottom: 70px;
    padding-top: 21px;
`;

export const ProfileText = styled.div`
    color: #333333;
    width: 859px;
    font-size: 28px;

    margin-top: 52px;
    margin-bottom: 52px;
    margin-left:35px; 
`;

export const RadioWrapper = styled.div`
    display: flex;
    padding-top: 21px;
`;

export const RadioInput = styled.input`
    border: none;
    margin-right: 16px;

    border-radius: 50%;
    width: 21px;
    height: 21px;
`;

export const LabelRadio = styled.label`
    color: #FFFFFF;
    font: Quicksand;
    font-size: 18px;
`;

export const AskHelpWrapper = styled.div`
    padding-bottom: 21px;
`;

export const Text = styled.p`
    margin-left: 67px;
`;
