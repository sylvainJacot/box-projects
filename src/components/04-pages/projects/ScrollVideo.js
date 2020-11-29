import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { appendScript } from "../../_config/appendScrit";
import { colorsRoles } from "../../01-atoms/colors";
import { ScrollTrigger } from "gsap/all";
import { random } from "gsap/all";
import VideoSrc from "../../_media/video-264-960.mp4";

export default function ScrollVideo() {
  gsap.registerPlugin(ScrollTrigger);

  const viewVideoRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: viewVideoRef.current,
        start: "top bottom",
        end: "bottom top",
        markers: true,
      },
    });
    tl.fromTo(
      videoRef.current,
      {
        currentTime: 0,
      },
      {
        currentTime: videoRef.current.duration || 10,
      }
    );
  });

  return (
    <>
      <ScrollVideoContainer>
        {/* <Canvas src="../../_media/video.mp4" id={"hero-video"} ref={canvasRef} /> */}
        <VideoContainer ref={viewVideoRef}>
          <Video
            src={VideoSrc}
            ref={videoRef}
            preload="auto"
            muted="muted"
            playsinline="true"
            webkit-playsinline="true"
          ></Video>
        </VideoContainer>
      </ScrollVideoContainer>
    </>
  );
}

export const ScrollVideoContainer = styled.div`
  position: relative;
  background-color: grey;
  width: 100%;
  height: 500vh;
  padding-left: 24rem;
  overflow: hidden;
`;

export const VideoContainer = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  position: fixed;
  /* left: 50%;
  top: 50%; */
  /* transform: translate(-50%, -50%); */
  height: 100%;
  width: auto;
`;
