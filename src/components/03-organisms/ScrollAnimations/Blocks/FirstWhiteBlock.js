import React from 'react';
import styled from "styled-components";

const FirstWhiteBlock = (props) => {
  return (
    <>
      <Container ref={props.FirstWhiteBlockRef}></Container>
    </>
  );
};

export default FirstWhiteBlock;

export const Container = styled.div`
  position: absolute;
  width: 400px;
  height: 320px;
  background-color: white;
  top: 234px;
  transform: translateX(-200%);
  z-index: -1;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.30);
`;
