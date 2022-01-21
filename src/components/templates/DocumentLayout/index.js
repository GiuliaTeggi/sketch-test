import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-light-grey);
  height: 100%;
`;

function DocumentLayout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default DocumentLayout;
