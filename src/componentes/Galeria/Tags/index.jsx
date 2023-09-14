/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import tags from './tags.json';


const StyledTagTitle = styled.h3`
  line-height: normal;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 24px;

  @media (max-width: 1470px) {
    margin-left: 20px;
  }
`;

const StyledTag = styled.button`
  transition: background-color 0.3s ease;
  background: rgba(217, 217, 217, 0.3);
  border: 2px solid ${(props) => (props.$active ? "#c98cf1" : "transparent")};
  /* border: ${(props) =>
    props.$active ? "2px solid #c98cf1" : "2px solid transparent"}; */
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

  @media (max-width: 1470px) {
    /* margin-left: 20px; */
  }
`;

const StyledTagContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 56px;

  @media (max-width: 840px) {
    display: flex;
    margin-top: 0px;
    margin-bottom: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const Tags = ({ setTag }) => {

  return (
    <StyledTagContainer>
      <StyledTagTitle>Busque por tags:</StyledTagTitle>

      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tags.map((tag) => (
          <StyledTag
            key={tag.id}
            onClick={() => setTag(tag.id)}
          >
            {tag.titulo}
          </StyledTag>
        ))}
      </div>
    </StyledTagContainer>
  );
};
