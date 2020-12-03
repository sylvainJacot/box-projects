import React from "react";
import styled from "styled-components";
import SecondPicBgimg from "../../../../_media/ScrollAnimations/Tesla1.jpg";

const SecondPic = (props) => {
  return (
    <>
      <Container ref={props.SecondPicRef}>
        <BgImg ref={props.SecondPicBgimg} src={SecondPicBgimg} />
      </Container>
    </>
  );
};

export default SecondPic;

export const Container = styled.div`
  position: absolute;
  display: flex;
  height: 400px;
  width: 400px;
  background-color: blue;
  top: 50%;
  right: -600px;
  transform: translate(140%, 0%);
  z-index: 2;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const BgImg = styled.img`
  width: auto;
  height: 100%;
  margin-left: 0;
`;
