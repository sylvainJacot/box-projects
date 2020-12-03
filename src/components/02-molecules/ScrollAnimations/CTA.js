import React from 'react';
import styled from "styled-components";

const CTA = (props) => {
  return (
    <>
      <Container>MORE INFO</Container>
    </>
  );
};

export default CTA;

export const Container = styled.a`
position: relative;
  display: inline;
  width: max-content;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  color: white;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  margin-top: 24px;

  &::after {
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    background-color: #DE0031;
    left: 0;
    right: 0;
    bottom: -1px;
    z-index: 1;
  }
`;
