import React from "react";
import styled from "styled-components";
import ThirdPicBgimg from "../../../../_media/ScrollAnimations/Tesla2.jpg";

const ThirdPic = (props) => {
  return (
    <>
      <Container ref={props.ThirdPicContainerRef}>
        <BgImg ref={props.ThirdPic} src={ThirdPicBgimg} />
      </Container>
    </>
  );
};

export default ThirdPic;

export const Container = styled.div`
  position: absolute;
  display: flex;
  height: 320px;
  width: 320px;
  left: -300%;
  top: -16%;
  background-color: grey;
  transform: translateX(-24px);
  z-index: 2;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  align-items: center;
`;

export const BgImg = styled.img`
  display: block;
  width: 100%;
  height: max-content;
  transform: scale(3);
  margin-left: 0;
`;
