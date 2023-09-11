/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

import { Imagem } from '../Galeria/Imagem';

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
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          <OverLay />

          <StyledDialog open={!!foto}>
            <Imagem foto={foto} expandida={true} />

            <form method="dialog">
              <button>ok</button>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
};
