import React from "react";
import styled from "styled-components";
import { paths } from "../../_routes/routes-paths";
import { Link } from "react-router-dom";
import { colorsRoles } from "../../01-atoms/colors";

const LinksBlock = () => {
  return (
    <>
      <Block>
        <StyledLink to={paths.ScrollVideo}>Scroll Video</StyledLink>
      </Block>
    </>
  );
};

export default LinksBlock;

export const Block = styled.ul`
  width: 100%;
  padding: 3rem 0;
`;
export const StyledLink = styled(Link)`
  font-family: "Roboto";
  font-size: 2rem;
  color: ${colorsRoles.DarkGrey};

  &:hover {
      color: ${colorsRoles.Brand02};
  }
`;
