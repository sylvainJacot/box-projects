import React from 'react';
import styled from "styled-components";
import MustangPictureSrc from "../../_media/ScrollAnimations/TeslaBase.jpg";
import MustangPictureSrc2 from "../../_media/ScrollAnimations/TeslaLight.jpg";
import FirstBlock from "../ScrollAnimations/Blocks/FirstBlock";
import FirstWhiteBlock from "../ScrollAnimations/Blocks/FirstWhiteBlock";

const MainPicHeader = (props) => {
  return (
    <>
      <Wrapper>
        <MustangPictureMask ref={props.MustangPictureMaskRef}>
          <MustangPicture
            src={MustangPictureSrc}
            ref={props.MustangPictureRef}
          />

          <MustangPictureOverlay
            src={MustangPictureSrc2}
            ref={props.MustangPictureOverlayRef}
          />
        </MustangPictureMask>

        <Underline ref={props.UnderlineRef}></Underline>
        <MainTitle ref={props.MainTitleRef}>TESLA</MainTitle>
        <FirstBlock FirstBlockRef={props.FirstBlockRef} />
        <FirstWhiteBlock FirstWhiteBlockRef={props.FirstWhiteBlockRef} />
      </Wrapper>
    </>
  );
};

export default MainPicHeader;

export const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  position: relative;
`;

export const MustangPictureMask = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  & img {
    position: absolute;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
  }
`;

export const MustangPicture = styled.img`
  width: 100%;
`;

export const MustangPictureOverlay = styled.img`
  opacity: 0;
  width: 100%;
`;

export const MainTitle = styled.h1`
  position: absolute;
  font-family: "Oswald";
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 16px;
  color: white;
  z-index: 2;
  top: -32px;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0;
  margin: 0;
`;
export const Underline = styled.div`
  position: absolute;
  display: block;
  content: "";
  height: 8px;
  background-color: red;
  z-index: 1;
  top: 0;
  left: calc(50% - 8px);
  transform: translate(-50%, -50%);
  width: 0;
  opacity: 0;
`;
