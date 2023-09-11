/* eslint-disable react/prop-types */
import { styled } from 'styled-components';

const StyledItem = styled.li`
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) => (props.$active ? "GandhiSansBold" : "GandhiSansRegular")};
  line-height: normal;
  align-items: center;
  margin-bottom: 32px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  gap: 18px;
`;

export const ItemNavegacao = ({
  children,
  activeIcon,
  inactiveIcon,
  active = false,
}) => {
  return (
    <StyledItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StyledItem>
  );
};
