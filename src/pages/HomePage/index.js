import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import PageContentWrapper from "../../components/atoms/PageContentWrapper";
import Header from "../../components/molecules/Header";

const Link = styled.a`
  color: var(--color-orange);
  text-decoration: none;
  font-weight: bold;
`;

function HomePage() {
  return (
    <div>
      <Header>
        <Heading>Sketch Document Viewer</Heading>
      </Header>
      <PageContentWrapper>
        <p>
          Please select a document to view e.g.{" "}
          <Link href="http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992">
            this one
          </Link>
        </p>
      </PageContentWrapper>
    </div>
  );
}

export default HomePage;
