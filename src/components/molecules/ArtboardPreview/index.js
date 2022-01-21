import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
`;

const StyledPreview = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }
`;

function ArtboardPreview({ name, thumbnail, link }) {
  return (
    <StyledLink to={link}>
      <StyledPreview>
        <div>
          <img src={thumbnail} alt={`${name} preview`} />
        </div>
        <p>{name}</p>
      </StyledPreview>
    </StyledLink>
  );
}

export default ArtboardPreview;
