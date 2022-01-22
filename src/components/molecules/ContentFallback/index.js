import styled from "styled-components";
import PageContentWrapper from "../../atoms/PageContentWrapper";
import Header from "../Header";

const ContentWrapper = styled(PageContentWrapper)`
  margin: var(--min-header-height) auto 0 auto;
  max-width: var(--max-width-content);
  text-align: center;
`;

function ContentFallback({ loading, error, errorMessage }) {
  if (error) console.log(error);
  return (
    <>
      <Header />
      <ContentWrapper>
        {loading && <p>Loading ...</p>}
        {error && <p>{errorMessage}</p>}
      </ContentWrapper>
    </>
  );
}

export default ContentFallback;
