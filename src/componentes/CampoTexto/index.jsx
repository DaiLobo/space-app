import { styled } from 'styled-components';

import search from './search.png';

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
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
  width: 400px;
  gap: 365px;

  ::placeholder {
    color: #d9d9d9;
  }

  &:focus-within {
    border: 2px solid #d9d9d9;
    outline: none;
}
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 6px;
  right: 10px;
  width: 38px;
  height: 38px;

`;

export const CampoTexto = (props) => {
  return (
    <StyledContainer>
      <StyledTextField {...props} />
      <IconeLupa src={search} alt="Ícone de lupa" />
    </StyledContainer>
  );
};
