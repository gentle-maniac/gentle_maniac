import styled from "styled-components";

export const Menu = () => {
  return <Wrapper>메뉴</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: white;
  z-index: 1000;
  cursor: pointer;
`;
