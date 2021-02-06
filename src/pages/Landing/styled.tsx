import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const LandingImg = styled.img`
  height: 100%; 

  position: absolute;
  top: 0;
  right: 0;
`;

export const TextContainer = styled.div`
  z-index: 1;

  position: absolute;
  bottom: 50px;
  left: 65px;
`;

export const TitleText = styled.h2`
  font: 500 288px Quicksand;
`;

export const SubtitleContainer = styled.div`
  font: 500 48px Quicksand;
`;