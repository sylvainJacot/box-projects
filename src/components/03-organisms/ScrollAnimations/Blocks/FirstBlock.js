import React from 'react';
import styled from "styled-components";
import SectionContent from "../../../02-molecules/ScrollAnimations/SectionContent";

const FirstBlock = (props) => {
  return (
    <>
      <Container ref={props.FirstBlockRef}>
      <SectionContent
      Title="PERFORMANCE"
      sectionNumber={"01"}
      Content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo fringilla nulla a malesuada. Integer sit amet sapien neque."}
      />
      </Container>
    </>
  );
};

export default FirstBlock;

export const Container = styled.div`
  position: absolute;
  height: 320px;
  width: 560px;
  top: 270px;
  left: 50%;
  transform: translateX(150%);
  background: rgb(73, 77, 96);
  background: linear-gradient(
    45deg,
    rgba(73, 77, 96, 1) 0%,
    rgba(94, 102, 138, 1) 100%
  );
  z-index: 1;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: 0;
    background-color: #DE0031;
  }
`;
