import { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Slide = ({ topPos, content, NegBg, end }) => {
  gsap.registerPlugin(ScrollTrigger);

  const TitlesWrapperRef = useRef(null);
  const ContainerRef = useRef(null);

  useEffect(() => {
  gsap.timeline({
        scrollTrigger: {
          trigger: ContainerRef.current,
          markers: false,
          scrub: true,
          start: "center 50%",
          end: "center -50%",
          pin: true,
        },
      })
      .fromTo(TitlesWrapperRef.current, { y: 25 }, { y: -25 })
      .from(TitlesWrapperRef.current, { opacity: 0, duration: 0.2 }, 0)
      .to(TitlesWrapperRef.current, { opacity: 0, duration: 0.2 }, 0.8);
  });

  return (
    <>
      <Container topPos={topPos} ref={ContainerRef} end={end}>
        <TitleWrapper ref={TitlesWrapperRef} NegBg={NegBg}>
          <Title NegBg={NegBg} end={end}>{content}</Title>
        </TitleWrapper>
      </Container>
    </>
  );
};

export default Slide;

export const Container = styled.div`
  position: absolute;
  top: ${(props) => props.topPos};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.end ? "white" : "none")};
`;

export const TitleWrapper = styled.div`
  display: block;
  width: ${(props) => (props.NegBg ? "100%" : "50%")};
  background: ${(props) => (props.NegBg ? "white" : "none")};
  padding: ${(props) => (props.NegBg ? "4rem" : "0")};
  opacity: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 10rem;
  color: ${(props) => (props.end ? "black" : "white")};
  margin: 0;
  text-align: center;
  width: ${(props) => (props.NegBg ? "50%" : "100%")};
`;
