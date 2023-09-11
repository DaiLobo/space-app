/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledFigure = styled.figure`
  flex-direction: column;
  background: #001634;
  border-radius: 20px;
  display: flex;
  flex: 1;

  img {
    /* border-radius: 20px 20px 0px 0px; */
  }

  figcaption {
    box-sizing: border-box;
    padding: 16px 21px;
    color: #fff;
    h3 {
      margin: 0;
      font-size: 20px;
      font-family: "GandhiSansBold";
    }

    footer {
      justify-content: space-between;
      flex-direction: row;
      display: flex;

      p {
        margin: 0;
        font-size: 16px;
      }

      div {
        display: flex;
        gap: 24px;
      }
    }
  }
`;

export const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
  return (
    <StyledFigure>
      <img
        src={foto?.path}
        alt={foto?.titulo}
        style={{ borderRadius: "20px 20px 0px 0px " }}
      />

      <figcaption>
        <h3>{foto?.titulo}</h3>
        <footer>
          <p>{foto?.fonte}</p>

          <div>
            <button
            onClick={() => aoAlternarFavorito(foto)}
              style={{
                border: "none",
                cursor: "pointer",
                background: "transparent",
              }}
            >
              <img src="/icones/favorito-ativo.png" alt="favorito" />
            </button>
            <button
              onClick={() => aoZoomSolicitado(foto)}
              style={{
                border: "none",
                cursor: "pointer",
                background: "transparent",
              }}
            >
              <img src="/icones/expandir.png" alt="favorito" />
            </button>
          </div>
        </footer>
      </figcaption>
    </StyledFigure>
  );
};
