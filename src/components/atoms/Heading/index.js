import styled from "styled-components";

const StyledHeading = styled.h1`
  color: var(--color-${(props) => props.color ?? "black"});
  margin: ${(props) => props.margin ?? 0};
  padding: 16px;
  font-size: ${(props) => props.fontSize ?? "18px"};

  & > div {
    margin: 0 auto;
    max-width: var(--max-width-content);
  }
`;

function Heading({ level, children }) {
  const Tag = level ? `h${level}` : "h1";
  return (
    <StyledHeading as={Tag}>
      <div>{children}</div>
    </StyledHeading>
  );
}

export default Heading;
