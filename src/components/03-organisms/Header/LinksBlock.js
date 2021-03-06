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
        <StyledLink to={paths.ScrollAnimations}>Scroll Animations</StyledLink>
        <StyledLink to={paths.ButtonComponent}>Button Component</StyledLink>
      </Block>
    </>
  );
};

export default LinksBlock;

export const Block = styled.ul`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
`;
export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  font-family: "Roboto";
  font-size: 2rem;
  color: ${colorsRoles.DarkGrey};
  margin-bottom: 2rem;

  &:hover,
  &:active,
  &:focus {
    color: ${colorsRoles.Brand02};
  }
`;
