import PageContentWrapper from "../../atoms/PageContentWrapper";
import Header from "../../molecules/Header";

function PageLayout({ header, content }) {
  return (
    <>
      <Header>{header}</Header>
      <PageContentWrapper>{content}</PageContentWrapper>
    </>
  );
}

export default PageLayout;
