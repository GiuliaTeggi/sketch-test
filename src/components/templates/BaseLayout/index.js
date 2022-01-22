import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-light-grey);
  min-height: 100%;
`;

function BaseLayout({ children }) {
  return <Main>{children}</Main>;
}

export default BaseLayout;
