/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import { CampoTexto } from "../CampoTexto";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;

    @media (max-width: 1470px) {
      margin-left: 20px;
    }

    /* @media (max-width: 680px) {
      margin-right: 80px;
    } */
  }

  @media (max-width: 1470px) {
    margin-left: 20px;
  }

  /* @media (max-width: 680px) {
    width: 100%;
    justify-content: end;
  } */
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  /* @media (max-width: 680px) {
    flex-direction: column;
  } */
`;

export const Header = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <img src="imagens/logo.png" alt="Logo" />
      </StyledHeader>
      <CampoTexto
        placeholder="O que você procura?"
        value={value}
        onChange={handleChange}
      />
    </StyledContainer>
  );
};
