import styled from "styled-components";

const StyledHeading = styled.h1`
  color: var(--color-black);
  margin: ${(props) => props.margin || 0};
  font-size: 18px;
  flex: ${(props) => props.flex || null};
  text-align: ${(props) => props.textAlign || "left"};
`;

function Heading({ level, children, flex, margin, textAlign }) {
  const Tag = level ? `h${level}` : "h1";
  return (
    <StyledHeading as={Tag} margin={margin} flex={flex} textAlign={textAlign}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
