import { SketchLogo } from "../../../assets";
import styled from "styled-components";

const StyledLogo = styled.div`
  margin: ${(props) => props.margin || 0};
`;

function Logo({ margin }) {
  return (
    <StyledLogo margin={margin}>
      <SketchLogo />
    </StyledLogo>
  );
}

export default Logo;
