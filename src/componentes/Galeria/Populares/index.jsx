import { styled } from 'styled-components';

import { Titulo } from '../../Titulo';
// import { Imagem } from "../Imagem";
import fotos from './fotos-populares.json';

const StyledPhotosColumn = styled.section`
  padding-top: 16px;
  flex-direction: column;
  display: flex;
  gap: 24px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  padding: 14px 30px;
  margin-top: 24px;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  width: 100%;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(201, 140, 240, 1) 0%,
      rgba(162, 130, 235, 1) 50%,
      rgba(123, 120, 229, 1) 100%
    );
  }
`;

export const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>

      <StyledPhotosColumn>
        {fotos?.map((foto) => (
          <img
            key={foto.id}
            src={foto?.path}
            alt={foto?.titulo}
            style={{ borderRadius: "20px", height: "158px", maxWidth: "212px" }}
          />
          // <Imagem key={foto.id} src={foto?.path} alt={foto.alt} />
        ))}
      </StyledPhotosColumn>

      <Button>Ver mais</Button>
    </section>
  );
};
