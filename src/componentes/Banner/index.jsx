/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

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
