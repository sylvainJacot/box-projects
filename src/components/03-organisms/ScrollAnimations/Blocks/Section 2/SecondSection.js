import styled from "styled-components";
import React from 'react';
import SecondBlock from "../Section 2/SecondBlock";
import SecondPic from "../Section 2/SecondPic";
import SecondSectionWhiteBG from "../Section 2/SecondSectionWhiteBG";

const SecondSection = (props) => {
  return (
    <>
      <Container ref={props.SecondSectionRef}>
        <SecondBlock SecondBlockRef={props.SecondBlockRef} />
        <SecondSectionWhiteBG
          SecondWhiteRef={props.SecondWhiteRef}
        />
        <SecondPic SecondPicRef={props.SecondPicRef} SecondPicBgimg={props.SecondPicBgimg}/>
      </Container>
    </>
  );
};

export default SecondSection;

export const Container = styled.div`
  position: relative;
  /* border: 1px solid red; */
  height: 320px;
  width: 440px;
  margin-top: 480px;
  transform: translateX(-72px);
  z-index: 0;
`;
