import { styled } from 'styled-components';

import { ItemNavegacao } from './ItemNavegacao';

const StyledList = styled.ul`
  list-style: none;
  width: 212px;
  padding: 0;
  margin: 0;
`;

export const BarraLateral = () => {
  return (
    <aside style={{ width: "212px" }}>
      <nav>
        <StyledList>
          <ItemNavegacao
            activeIcon="icones/home-ativo.png"
            inactiveIcon="icones/home-inativo.png"
            active={true}
          >
            Início
          </ItemNavegacao>

          <ItemNavegacao
            activeIcon="icones/mais-vistas-ativo.png"
            inactiveIcon="icones/mais-vistas-inativo.png"
          >
            Mais vistas
          </ItemNavegacao>

          <ItemNavegacao
            activeIcon="icones/mais-curtidas-ativo.png"
            inactiveIcon="icones/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNavegacao>

          <ItemNavegacao
            activeIcon="icones/novas-ativo.png"
            inactiveIcon="icones/novas-inativo.png"
          >
            Novas
          </ItemNavegacao>

          <ItemNavegacao
            activeIcon="icones/surpreenda-me-ativo.png"
            inactiveIcon="icones/surpreenda-me-inativo.png"
          >
            Surpreenda-me
          </ItemNavegacao>
        </StyledList>
      </nav>
    </aside>
  );
};
