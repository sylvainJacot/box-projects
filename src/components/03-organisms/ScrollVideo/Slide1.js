import React from "react";
import styled from "styled-components";

const Slide1 = ({topPos, content}) => {
  return (
    <>
      <Container topPos={topPos}>
        <Title>{content}</Title>
      </Container>
    </>
  );
};

export default Slide1;

export const Container = styled.div`
  position: absolute;
  top: ${props => props.topPos};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`

  font-size: 12rem;
  color: white;
`;
