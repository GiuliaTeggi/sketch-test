import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--color-white);
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
