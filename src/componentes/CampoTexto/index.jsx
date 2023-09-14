import { styled } from "styled-components";

import search from "./search.png";

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 1470px) {
    margin-right: 20px;
    margin-left: 20px;
  }

  /* @media (max-width: 680px) {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    width: 100vw;
  } */
`;

const StyledTextField = styled.input`
  background-color: transparent;
  border: 2px solid #c98cf1;
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 10px;
  align-items: center;
  padding: 12px 16px;
  line-height: 20px;
  font-weight: 400;
  font-size: 20px;
  color: #d9d9d9;
  width: 400px;
  gap: 365px;

  ::placeholder {
    color: #d9d9d9;
  }

  &:focus-within {
    border: 2px solid #d9d9d9;
    outline: none;
  }

  @media (max-width: 744px) {
    width: 250px;
  }

  /* @media (max-width: 680px) {
    justify-content: center;
    width: 80vw;
  } */
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 6px;
  right: 10px;
  width: 38px;
  height: 38px;

  /* @media (max-width: 680px) {
    right: 80px;
  } */
`;

export const CampoTexto = (props) => {
  return (
    <StyledContainer>
      <StyledTextField {...props} />
      <IconeLupa src={search} alt="Ícone de lupa" />
    </StyledContainer>
  );
};
