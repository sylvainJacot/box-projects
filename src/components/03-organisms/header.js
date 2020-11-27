import styled from "styled-components";
import { paths } from "../_routes/routes-paths";
import { Link } from "react-router-dom";
import { LogoJacotStudio } from "../01-atoms/icons";

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
          <h1>Personnal Projects</h1>
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
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: red;
  grid-column: 1 / 3;
`;
export const LogoContainer = styled.div`
  height: 10rem;
  background-color: green;
`;

export const NavContainer = styled.div`
  background-color: yellow;
`;

export const Nav = styled.nav``;
