import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { colorsRoles } from "../../01-atoms/colors";
import { ScrollTrigger } from "gsap/all";
import VideoSrc from "../../_media/video-264-960.mp4";
import Slide1 from "../../03-organisms/ScrollVideo/Slide1";

export default function ScrollVideo() {
  gsap.registerPlugin(ScrollTrigger);

  const viewVideoRef = useRef();
  const videoRef = useRef();
  const pinDiv = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: viewVideoRef.current,
        pin: pinDiv.current,
        start: "top bottom",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
    tl.fromTo(
      videoRef.current,
      {
        currentTime: 0,
        scale: 0.5,
      },
      {
        currentTime: videoRef.current.duration || 10,
        scale: 1,
      }
    );
  });

  return (
    <>
      <ScrollVideoContainer>
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
        <Slide1 topPos={"0"} content={"Title 1"} ref={pinDiv}/>
        <Slide1 topPos={"100vh"} content={"Title 2"} ref={pinDiv}/>
        <Slide1 topPos={"200vh"} content={"Title 3"} ref={pinDiv}/>
        <Slide1 topPos={"400vh"} content={"The End"} ref={pinDiv}/>
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
  overflow-x: hidden;
`;

export const VideoContainer = styled.div`
  position: relative;
  background-color: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Video = styled.video`
  position: fixed;
  left: calc(50% + 12rem);
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: auto;
`;
