import React from 'react';
import styled from "styled-components";

const ThirdWhiteBg = (props) => {
  return (
    <>
      <Container ref={props.ThirdWhiteBgRef}></Container>
    </>
  );
};

export default ThirdWhiteBg;

export const Container = styled.div`
  position: absolute;
  height: 368px;
  width: 816px;
  left: 340%;
  top: 30%;
  background-color: white;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;
