import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
`;

function IconLink({ url, icon, ariaLabel }) {
  return (
    <StyledLink to={url} ariaLabel={ariaLabel}>
      {icon}
    </StyledLink>
  );
}

export default IconLink;
