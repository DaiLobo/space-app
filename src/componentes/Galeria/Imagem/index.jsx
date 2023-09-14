/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledFigure = styled.figure`
  width: ${(props) => (props.$expandida ? "100%" : "460px")};
  flex-direction: column;
  /* max-width: 550px; */
  background: #001634;
  border-radius: 20px;
  display: flex;
  /* flex: 1; */

  @media (max-width: 1375px) {
    flex: 1;
  }

  img {
    /* max-width: 100%; */
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

export const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <StyledFigure $expandida={expandida}>
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
              <img src={iconeFavorito} alt="favorito" />
            </button>

            {!expandida && (
              <button
                onClick={() => aoZoomSolicitado(foto)}
                aria-hidden={expandida}
                style={{
                  border: "none",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <img src="/icones/expandir.png" alt="favorito" />
              </button>
            )}
          </div>
        </footer>
      </figcaption>
    </StyledFigure>
  );
};
