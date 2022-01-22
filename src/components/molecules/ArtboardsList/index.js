import styled from "styled-components";
import ArtboardPreview from "../ArtboardPreview";

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  max-width: var(--max-width-content);

  & li {
    padding: 24px;
    display: flex;
  }
`;

function ArtboardsList({ artboards }) {
  return (
    <>
      <List>
        {artboards.map(({ name, files }, index) => {
          const thumbnail =
            files[0]?.thumbnails[1]?.url || files[1]?.thumbnail[1]?.url || "";
          return (
            <li key={index}>
              <ArtboardPreview
                name={name}
                thumbnail={thumbnail}
                link={`artboard/${index}`}
              />
            </li>
          );
        })}
      </List>
    </>
  );
}

export default ArtboardsList;
