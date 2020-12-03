import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import VideoSrc from "../../_media/video-264-960.mp4";
import Slide from "../../03-organisms/ScrollVideo/Slide";

export default function ScrollVideo() {
  gsap.registerPlugin(ScrollTrigger);

  const viewVideoRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    console.log(videoRef.current);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: viewVideoRef.current,
        start: "top bottom",
        end: "bottom top",
        markers: false,
        scrub: 3,
      },
    });
    tl.fromTo(
      videoRef.current,
      {
        currentTime: 0,
        scale: 0.5,
      },
      {
        currentTime: videoRef.current.duration || 13,
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
        <Slide topPos={"50vh"} content={"Title 1"} />
        <Slide topPos={"150vh"} content={"Title 2 with a bit of content"} />
        <Slide
          topPos={"250vh"}
          content={"Title 3 with a bit of content and an extra more"}
        />
        <Slide topPos={"400vh"} content={"The End"} end={true} />
      </ScrollVideoContainer>
    </>
  );
}

export const ScrollVideoContainer = styled.div`
  position: relative;
  background-color: red;
  width: calc(100% - 24rem);
  height: 500vh;
  margin-left: 24rem;
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
  height: 64%;
  width: auto;
`;
