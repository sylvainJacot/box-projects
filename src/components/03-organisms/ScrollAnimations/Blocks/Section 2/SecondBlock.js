import React from 'react';
import styled from "styled-components";
import SectionContent from "../../../../02-molecules/ScrollAnimations/SectionContent";

const SecondBlock = (props) => {
  return (
    <>
      <Container ref={props.SecondBlockRef}>
      <SectionContent
      Title="SECURITY"
      sectionNumber={"02"}
      Content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo fringilla nulla a malesuada. Integer sit amet sapien neque."}
      isCTA
      />
      </Container>
    </>
  );
};

export default SecondBlock;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: rgb(73,77,96);
background: linear-gradient(45deg, rgba(73,77,96,1) 0%, rgba(94,102,138,1) 100%);
  z-index: 0;
  transform: translate(176px, 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
