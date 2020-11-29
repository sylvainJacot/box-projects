import styled from "styled-components";
import { paths } from "../_routes/routes-paths";
import { Link } from "react-router-dom";
import { LogoJacotStudio } from "../01-atoms/icons";
import { colorsRoles } from "../01-atoms/colors";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to={paths.home}>
            <LogoJacotStudio
              Size={"40px"}
              CircleColor={"pink"}
              FillColor={"blue"}
            />
          </Link>
          <h1>Projects</h1>
        </LogoContainer>
        <NavContainer>
          <Nav>
            <ul>
              <Link to={paths.ScrollVideo}>Scroll Video</Link>
            </ul>
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
  background-color: ${colorsRoles.DarkGrey};
  z-index: 1;
`;
export const LogoContainer = styled.div`
  height: 10rem;
  background-color: pink;
  display: flex;

  h1 {
    font-family: "Play Fair";
  }
`;

export const NavContainer = styled.div`
  background-color: yellow;
`;

export const Nav = styled.nav``;
