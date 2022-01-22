import styled from "styled-components";
import PageContentWrapper from "../../atoms/PageContentWrapper";
import Header from "../../molecules/Header";

const Main = styled.main`
  background-color: var(--color-light-grey);
  min-height: 100%;
`;

function PageLayout({ header, content }) {
  return (
    <>
      <Header>{header}</Header>
      <Main>
        <PageContentWrapper>{content}</PageContentWrapper>
      </Main>
    </>
  );
}

export default PageLayout;
