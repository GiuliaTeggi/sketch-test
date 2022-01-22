import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import PageLayout from "../../components/templates/PageLayout";

const Link = styled.a`
  color: var(--color-orange);
  text-decoration: none;
  font-weight: bold;
`;

function HomePage() {
  return (
    <PageLayout
      header={<Heading>Sketch Document Viewer</Heading>}
      content={
        <p>
          Please select a document to view e.g.{" "}
          <Link href="http://localhost:3000/document/e981971c-ff57-46dc-a932-a60dc1804992">
            this one
          </Link>
        </p>
      }
    />
  );
}

export default HomePage;
