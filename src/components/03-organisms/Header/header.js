import styled from "styled-components";
import { paths } from "../../_routes/routes-paths";
import { Link } from "react-router-dom";
import { LogoJacotStudio } from "../../01-atoms/icons";
import { colorsRoles } from "../../01-atoms/colors";
import LinksBlock from "./LinksBlock";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to={paths.home}>
            <LogoJacotStudio
              Size={"4rem"}
              CircleColor={"transparent"}
              FillColor={colorsRoles.DarkGrey}
            />
          </Link>
          <h1>Projects</h1>
        </LogoContainer>
        <NavContainer>
          <Nav>
            <LinksBlock />
          </Nav>
        </NavContainer>
      </HeaderContainer>
    </>
  );
}

export const HeaderContainer = styled.div`
  position: fixed;
  width: 24rem;
  height: 100vh;
  background-color: ${colorsRoles.White};
  z-index: 1;
  padding: 2rem;
`;
export const LogoContainer = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Play Fair";
    font-size: 3rem;
    color: ${colorsRoles.DarkGrey};
    margin-left: 1rem;
  }
`;

export const NavContainer = styled.div``;

export const Nav = styled.nav``;
