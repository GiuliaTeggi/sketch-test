import styled from "styled-components";

const StyledHeading = styled.h1`
  color: var(--color-black);
  margin: ${(props) => props.margin || 0};
  font-size: 18px;
`;

function Heading({ level, children, margin }) {
  const Tag = level ? `h${level}` : "h1";
  return (
    <StyledHeading as={Tag} margin={margin}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
