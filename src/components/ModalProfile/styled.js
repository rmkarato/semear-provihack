import styled from "styled-components";

export const ButtonModal = styled.button`
    font-family: Quicksand;
    border: none;
    background: none;
    color: #FAC358;
    outline: none;

    cursor: pointer;
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: #F8F8F8;
`;

export const CardWrapper = styled.div`
    height: 25%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    background: #FAC358;
`;

export const ImageMini = styled.img`
    width: 236px;
    height: 236px;

    border-radius: 50%;

    margin-right: 30%;
    margin-left: 30%;
`;

export const TextName = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 18px;

    margin: 0 ;
`;

export const TextAge = styled.p`
    text-align: center;
    font-size: 12px;

    margin: 0;
`;

export const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const TextCategory1 = styled.div`
    font-size: 16px;
    text-align: center;
    color: #F8F8F8;
    margin: 0;
    margin-top: 10px;

    width: 168px;
    height: 36px;
    border-radius: 18px;
    background: rgba(109, 96, 162, 1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextCategory2 = styled.div`
    font-size: 16px;
    text-align: center;
    color: #F8F8F8;
    margin: 0;
    margin-top: 10px;

    width: 168px;
    height: 36px;
    border-radius: 18px;
    background: rgba(109, 55, 117, 1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextCategory3 = styled.div`
    font-size: 16px;
    text-align: center;
    color: #F8F8F8;
    margin: 0;
    margin-top: 10px;

    width: 168px;
    height: 36px;
    border-radius: 18px;
    background: rgba(178, 72, 103, 1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HelpWrapper = styled.div` 
    width: 185px;
    height: 21px;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
`;

export const TextNumber = styled.p`
    color: #FAC358;
    text-align: center;
    font-size: 18px;
`;

export const TextHelp = styled.p`
    text-align: center;
    font-size: 18px;
`;

export const ImgRating = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;

    padding-left: 70px;
    padding-right: 70px;
    padding-top: 21px;
`;

export const Button = styled.div`
    width: 198px;
    height: 36px;
    border-radius: 50px;
    margin-left: auto;
    margin-right: auto;

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

export const ButtonProfile = styled.button`
    text-decoration: none;
`;

export const Container = styled.div`
    height: 58%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const GroupWrapper = styled.div`
    display: flex;
    justify-content: center;
    aign-items: center;
`