import { useEffect } from "react";
import styled from "styled-components";
import { appendScript } from "../../_config/appendScrit";
import { colorsRoles } from "../../01-atoms/colors";

export default function ScrollVideo() {
  useEffect(() => {
    appendScript("./scroll-animation.js");
  });

  return (
    <>
      <ScrollVideoContainer>
        <Canvas id={"hero-video"} />
      </ScrollVideoContainer>
    </>
  );
}

export const ScrollVideoContainer = styled.div`
  background-color: grey;
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
  background-color: white;
`;


