/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

import { Titulo } from '../Titulo';
import { Imagem } from './Imagem';
import { Populares } from './Populares';
import { Tags } from './Tags';

const StyledContainerGallery = styled.div`
  display: flex;
`;

const StyledSection = styled.section`
  flex-grow: 1;
`;

export const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  return (
    <>
      <Tags />

      <StyledContainerGallery>
        <StyledSection>
          <Titulo>Navegue pela galeria</Titulo>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {fotos?.map((foto) => (
              <Imagem
                key={foto.id}
                foto={foto}
                aoZoomSolicitado={aoFotoSelecionada}
              />
            ))}
          </div>
        </StyledSection>

        <Populares />
      </StyledContainerGallery>
    </>
  );
};
