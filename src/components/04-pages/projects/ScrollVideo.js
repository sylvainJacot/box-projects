import styled from "styled-components";
import {colorsRoles} from "../../01-atoms/colors";

export default function ScrollVideo() {
  return (
    <>
      <ScrollVideoContainer>
        <Canvas></Canvas>
      </ScrollVideoContainer>
    </>
  );
}

export const ScrollVideoContainer = styled.div`
  background-color: ${colorsRoles.Black};
  width: 100%;
  height: 500vh;
  padding-left: 24rem;
`;

export const Canvas = styled.canvas`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;
