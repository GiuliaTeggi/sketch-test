import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--color-white);
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  min-height: var(--min-header-height);
  border-bottom: 1px solid var(--color-border-grey);
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
