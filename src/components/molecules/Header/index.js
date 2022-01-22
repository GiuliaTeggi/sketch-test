import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  background: var(--color-white);
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  min-height: var(--min-header-height);
  border-bottom: 1px solid var(--color-border-grey);
`;

const HeaderContentWrapper = styled.div`
  margin: 0 auto;
  max-width: var(--max-width-content);
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
`;

function Header({ children }) {
  return (
    <StyledHeader>
      <HeaderContentWrapper>{children}</HeaderContentWrapper>
    </StyledHeader>
  );
}

export default Header;
