import styled from "styled-components";
import Heading from "../../components/atoms/Heading";
import PageLayout from "../../components/templates/PageLayout";
import { Link } from "react-router-dom";
import Logo from "../../components/atoms/Logo";

const StyledLink = styled(Link)`
  color: var(--color-orange);
  text-decoration: none;
  font-weight: bold;
`;

function HomePage() {
  return (
    <PageLayout
      header={
        <>
          <Logo margin={"0 32px 0 0"} />
          <Heading>Sketch Document Viewer</Heading>
        </>
      }
      content={
        <p>
          Please select a document to view e.g.{" "}
          <StyledLink to="/document/e981971c-ff57-46dc-a932-a60dc1804992">
            this one
          </StyledLink>
        </p>
      }
    />
  );
}

export default HomePage;
