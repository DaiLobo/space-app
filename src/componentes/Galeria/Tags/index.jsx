import { styled } from 'styled-components';

import tags from './tags.json';

const StyledTagTitle = styled.h3`
  line-height: normal;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 24px;
`;

const StyledTag = styled.button`
  transition: background-color 0.3s ease;
  background: rgba(217, 217, 217, 0.3);
  border: 2px solid transparent;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  padding: 10px 8px;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  color: #fff;
  height: 50px;
  gap: 10px;

  &:hover {
    border-color: #c98cf1;
  }
`;

export const Tags = () => {
  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "56px" }}>
      <StyledTagTitle>Busque por tags:</StyledTagTitle>

      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {tags.map((tag) => (
          <StyledTag key={tag.id}> {tag.titulo} </StyledTag>
        ))}
      </div>
    </div>
  );
};
