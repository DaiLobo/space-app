/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import { Imagem } from "../Galeria/Imagem";

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

const StyledDialog = styled.dialog`
  background: transparent;
  justify-content: center;
  position: absolute;
  display: flex;
  width: 800px;
  top: 294px;
  padding: 0;
  border: 0;

  form {
    button {
      background-color: transparent;
      position: relative;
      cursor: pointer;
      border: none;
      right: 86px;
      top: 28px;
    }
  }
`;

export const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <OverLay />

          <StyledDialog open={!!foto}  onClose={aoFechar}>
            <Imagem
              foto={foto}
              expandida={true}
              aoAlternarFavorito={aoAlternarFavorito}
            />

            <form method="dialog">
              <button formMethod="dialog">
                <img src="/icones/fechar.png" alt="favorito" />
              </button>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
};
