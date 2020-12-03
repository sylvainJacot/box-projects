import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import MainPicHeader from "../../03-organisms/ScrollAnimations/MainPicHeader";
import {
  MainPicAnimStart,
  SecondAnimSection,
  ThirdAnimSection,
} from "../../03-organisms/ScrollAnimations/gsap-animations";
import SecondSection from "../../03-organisms/ScrollAnimations/Blocks/Section 2/SecondSection";
import ThirdMainBlock from "../../03-organisms/ScrollAnimations/Blocks/Section 3/ThirdMainBlock";

const ScrollAnimations = () => {
  let MainTitleRef = useRef(null);
  let UnderlineRef = useRef(null);
  let MainBGRef = useRef(null);
  let MustangPictureRef = useRef(null);
  let MustangPictureOverlayRef = useRef(null);
  let MustangPictureMaskRef = useRef(null);
  let FirstBlockRef = useRef(null);
  let FirstWhiteBlockRef = useRef(null);

  let SecondSectionRef = useRef(null);
  let SecondBlockRef = useRef(null);
  let SecondWhiteRef = useRef(null);
  let SecondPicRef = useRef(null);
  let SecondPicBgimg = useRef(null);

  let ThirdMainBlockRef = useRef(null);
  let ThirdBlockRef = useRef(null);
  let ThirdWhiteBgRef = useRef(null);
  let ThirdPicRef = useRef(null);
  let ThirdPicContainerRef = useRef(null);

  const timeLine = gsap.timeline();

  useEffect(() => {
    timeLine
      .add(
        MainPicAnimStart(
          MustangPictureOverlayRef,
          MainTitleRef,
          UnderlineRef,
          MainBGRef,
          MustangPictureMaskRef,
          FirstBlockRef,
          FirstWhiteBlockRef
        )
      )
      .add(
        SecondAnimSection(
          SecondSectionRef,
          SecondBlockRef,
          SecondWhiteRef,
          SecondPicRef,
          SecondPicBgimg
        )
      )
      .add(
        ThirdAnimSection(
          ThirdMainBlockRef,
          ThirdBlockRef,
          ThirdWhiteBgRef,
          ThirdPicRef,
          ThirdPicContainerRef
        )
      );
  });

  return (
    <>
      <Wrapper>
        <Box ref={MainBGRef}>
          <MainPicHeader
            MustangPictureMaskRef={MustangPictureMaskRef}
            UnderlineRef={UnderlineRef}
            MainTitleRef={MainTitleRef}
            MustangPictureRef={MustangPictureRef}
            MustangPictureOverlayRef={MustangPictureOverlayRef}
            FirstBlockRef={FirstBlockRef}
            FirstWhiteBlockRef={FirstWhiteBlockRef}
          />
          <SecondSection
            SecondSectionRef={SecondSectionRef}
            SecondBlockRef={SecondBlockRef}
            SecondWhiteRef={SecondWhiteRef}
            SecondPicRef={SecondPicRef}
            SecondPicBgimg={SecondPicBgimg}
          />
          <ThirdMainBlock
            ThirdMainBlockRef={ThirdMainBlockRef}
            ThirdBlockRef={ThirdBlockRef}
            ThirdWhiteBgRef={ThirdWhiteBgRef}
            ThirdPicRef={ThirdPicRef}
            ThirdPicContainerRef={ThirdPicContainerRef}
          />
          <Copyright>Pictures from caricos.com</Copyright>
        </Box>
      </Wrapper>
    </>
  );
};

export default ScrollAnimations;

export const Wrapper = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 2500px;
  background-color: #494d60;
  opacity: 1;
  margin-top: 0;
  border-radius: 0px;
  overflow-x: no-scroll;
`;

export const Copyright = styled.p`
  margin-top: 300px;
  font-family: "Oswald";
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 4px;
  color: white;
  text-align: center;
`;
