import styled from "styled-components";

const ImageWrapper = styled.div`
  max-height: calc(100vh - var(--min-header-height));
  display: flex;
  padding: 32px;

  @media (max-width: 425px) {
    margin-top: var(--min-header-height);
  }
`;

const Image = styled.img`
  object-fit: contain;
`;

function ArtboardDetail({ artboard }) {
  const artboardUrl = artboard.files[0].url;
  return (
    <ImageWrapper>
      <Image
        src={artboardUrl}
        width="100%"
        height="auto"
        alt={artboard.name || "Artboard"}
      />
    </ImageWrapper>
  );
}

export default ArtboardDetail;
