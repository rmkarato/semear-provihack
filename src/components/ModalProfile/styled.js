import styled from "styled-components";

export const ModalContainer = styled.div`
    background-color: white;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    width: 200px;
    height: 200px;
    left: 200px;
    top: 40px;
    color: black;
`;

export const ButtonModal = styled.button`
    font-family: Quicksand;
    border: none;
    background: none;
    color: #FAC358;
    outline: none;

    cursor: pointer;
`;