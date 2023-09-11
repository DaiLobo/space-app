import { styled } from 'styled-components';

import { CampoTexto } from '../CampoTexto';

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <StyledHeader>
        <img src="imagens/logo.png" alt="Logo" />
      </StyledHeader>
      <CampoTexto placeholder="O que você procura?" />
    </div>
  );
};
