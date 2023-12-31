/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledBanner = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  align-items: center;
  min-height: 328px;
  max-width: 100%;
  display: flex;
  flex-grow: 1;
  margin: 0;

  @media (max-width: 1470px) {
    margin-right: 20px;
    margin-left: 20px;
    max-width: 70%;
  }

  @media (max-width: 1068px) {
    margin-right: 0px;
    max-width: 60%;
  }

  /* @media (max-width: 680px) {
    max-width: 100%;
  } */
`;

const StyledTitle = styled.h1`
  line-height: normal;
  color: #ffffff;
  max-width: 300px;
  font-weight: 400;
  font-size: 40px;
  padding: 0 64px;
`;

export const Banner = ({ texto, backgroundImage }) => {
  return (
    <StyledBanner $backgroundImage={backgroundImage}>
      <StyledTitle>{texto}</StyledTitle>
    </StyledBanner>
  );
};
