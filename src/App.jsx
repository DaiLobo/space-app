import { useState } from 'react';

import { styled } from 'styled-components';

import { Banner } from './componentes/Banner';
import { BarraLateral } from './componentes/BarraLateral';
import EstilosGlobais from './componentes/EstilosGlobais';
import { Galeria } from './componentes/Galeria';
import { Header } from './componentes/Header';
import { ModalZoom } from './componentes/ModalZoom';
import fotos from './fotos.json';

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
  /* margin: 0 24px; */
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <StyledAppContainer>
        <Header />

        <MainContainer>
          <BarraLateral />

          <GalleryContainer>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage="banner.png"
            />

            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
            />
          </GalleryContainer>
        </MainContainer>
      </StyledAppContainer>

      <ModalZoom foto={fotoSelecionada} />
    </FundoGradiente>
  );
}

export default App;
