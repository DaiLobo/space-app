import { styled } from "styled-components";

const StyledFooter = styled.footer`
  background: #04244f;
  margin-top: 60px;
  min-height: 80px;
`;

const StyledTitle = styled.h1`
  line-height: normal;
  font-weight: 500;
  max-width: 300px;
  font-size: 16px;
  margin: 30px;
  color: #ffffff;
`;

const StyledSocialMedia = styled.div`
  flex-wrap: wrap;
  margin: 24px;
  display: flex;
  gap: 35px;
`;

const StyledGrid = styled.div`
  justify-content: space-between;
  align-items: center;
  /* margin: 30px 46px; */
  flex-wrap: wrap;
  display: flex;

  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledGrid>
        <StyledSocialMedia>
          <img src="imagens/sociais/facebook.svg" alt="favorito" />
          <img src="imagens/sociais/instagram.svg" alt="favorito" />
          <img src="imagens/sociais/twitter.svg" alt="favorito" />
        </StyledSocialMedia>

        <div>
          <StyledTitle>Desenvolvido por Diana Rose.</StyledTitle>
        </div>
      </StyledGrid>
    </StyledFooter>
  );
};
