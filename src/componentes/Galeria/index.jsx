/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import { Titulo } from "../Titulo";
import { Imagem } from "./Imagem";
import { Populares } from "./Populares";
import { Tags } from "./Tags";

const StyledContainerGallery = styled.div`
  display: flex;
  /* margin-left: 20px; */

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const StyledSection = styled.section`
  flex-grow: 1;

  @media (max-width: 1470px) {
    margin-left: 20px;
  }
`;

export const Galeria = ({
  fotos = [],
  aoFotoSelecionada,
  aoAlternarFavorito,
  setTag,
}) => {
  return (
    <>
      <Tags setTag={setTag} />

      <StyledContainerGallery>
        <StyledSection>
          <Titulo>Navegue pela galeria</Titulo>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {fotos?.map((foto) => (
              <Imagem
                key={foto.id}
                foto={foto}
                aoAlternarFavorito={aoAlternarFavorito}
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
