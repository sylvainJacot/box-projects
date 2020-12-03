import React from 'react';
import styled from "styled-components";

const SecondSectionWhiteBG = (props) => {
  return (
    <>
      <Container ref={props.SecondWhiteRef}></Container>
    </>
  );
};

export default SecondSectionWhiteBG;

export const Container = styled.div`
  position: absolute;
  display: block;
  width: 425px;
  height: 190px;
  background-color: white;
  top: 230px;
  left: -90px;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.3);
  z-index: -1;
  opacity: 0;
`;
