import React from 'react';
import styled from "styled-components";
import SectionContent from "../../../../02-molecules/ScrollAnimations/SectionContent";

const ThirdBlock = (props) => {
  return (
    <>
      <Container ref={props.ThirdBlockRef}>
      <SectionContent
      Title="AUTOPILOT"
      sectionNumber={"03"}
      Content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo fringilla nulla a malesuada. Integer sit amet sapien neque."}
      isCTA
      />
      </Container>
    </>
  );
};



export default ThirdBlock;

export const Container = styled.div`
  position: absolute;
  height: 320px;
  width: 440px;
  left: 300px;
  background: rgb(73, 77, 96);
  background: linear-gradient(
    45deg,
    rgba(73, 77, 96, 1) 0%,
    rgba(94, 102, 138, 1) 100%
  );
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  z-index: 3;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
