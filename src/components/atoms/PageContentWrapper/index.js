import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
`;

function PageContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default PageContentWrapper;
