import styled from "styled-components";
import Heading from "../../atoms/Heading";
import IconLink from "../../atoms/IconLink";
import {
  CloseIcon,
  Separator,
  Previous,
  Next,
  BreadCrumb,
} from "../../../assets";

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const LinksWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    position: relative;
  }
`;

const PreviousLinkWrapper = styled.div`
  min-width: 48px;
`;

const ParagraphWrapper = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  & p {
    min-width: 24px;
    text-align: center;
  }
`;

function ArtboardHeader({ documentId, currentIndex, totalArtboards, name }) {
  const nextIndex = currentIndex + 1;
  const previousIndex = currentIndex - 1;
  const isFirstArtboard = currentIndex === 0;
  const isLastArtboard = currentIndex === totalArtboards - 1;
  return (
    <Container>
      <LinksWrapper>
        <IconLink
          url={`/document/${documentId}`}
          icon={<CloseIcon />}
          ariaLabel={"Return to document view"}
        />
        <Separator />
        <PreviousLinkWrapper>
          {!isFirstArtboard && (
            <IconLink
              url={`/document/${documentId}/artboard/${previousIndex}`}
              ariaLabel={"Previous artboard"}
              icon={<Previous />}
            />
          )}
        </PreviousLinkWrapper>
        <ParagraphWrapper>
          <p>{currentIndex + 1}</p>
          <BreadCrumb />
          <p>{totalArtboards}</p>
        </ParagraphWrapper>
        {!isLastArtboard && (
          <IconLink
            url={`/document/${documentId}/artboard/${nextIndex}`}
            icon={<Next />}
            ariaLabel={"Next artboard"}
          />
        )}
      </LinksWrapper>
      <Heading flex={1} textAlign={"center"}>
        {name}
      </Heading>
    </Container>
  );
}

export default ArtboardHeader;
