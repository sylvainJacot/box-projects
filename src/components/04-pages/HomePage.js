import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <>
      <Wrapper>
        Home
        <Square></Square>
      </Wrapper>
    </>
  );
};

export default HomePage;

export const Wrapper = styled.div`
  width: 100%;
  background-color: lightsalmon;
`;

export const Square = styled.div`
  height: 300px;
  width: 300px;
  background-color: greenyellow;
`;
