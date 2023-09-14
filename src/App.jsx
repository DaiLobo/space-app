import { useEffect, useState } from "react";

import { styled } from "styled-components";

import { Banner } from "./componentes/Banner";
import { BarraLateral } from "./componentes/BarraLateral";
import EstilosGlobais from "./componentes/EstilosGlobais";
import { Galeria } from "./componentes/Galeria";
import { Header } from "./componentes/Header";
import { ModalZoom } from "./componentes/ModalZoom";
import { Footer } from "./componentes/Footer";
import { useDebounce } from "./hooks/useDebounce";

import fotos from "./fotos.json";

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const StyledAppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  flex-direction: column;
  display: flex;
  gap: 24px;

  @media (max-width: 1068px) {
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 32px;
  }
`;

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MenuContainer = styled.section`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  flex-grow: 1;
  gap: 24px;
`;

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [busca, setBusca] = useState("");
  const debouncedValue = useDebounce(busca, 500);
  const [tag, setTag] = useState(0);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }

    setFotosDaGaleria(
      fotosDaGaleria?.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita,
        };
      })
    );
  };

  useEffect(() => {
    const fotosFiltradas = fotos.filter(
      (foto) =>
        (!tag || foto.tagId === tag) &&
        (!busca || foto.titulo.toLowerCase().includes(busca.toLowerCase()))
    );
    setFotosDaGaleria(fotosFiltradas);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, tag]);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <StyledAppContainer>
        <Header value={busca} setValue={setBusca} />

        <MainContainer>
          <MenuContainer>
            <BarraLateral />
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage="banner.png"
            />
          </MenuContainer>

          <GalleryContainer>
            <Galeria
              aoAlternarFavorito={aoAlternarFavorito}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
              setTag={setTag}
            />
          </GalleryContainer>
        </MainContainer>
      </StyledAppContainer>
      <Footer />

      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
}

export default App;
