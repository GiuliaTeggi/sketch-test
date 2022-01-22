import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  min-height: 50vh;
  margin-top: var(--min-header-height);
`;

function PageContentWrapper({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default PageContentWrapper;
