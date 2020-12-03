import React from 'react';
import styled from "styled-components";
import CTA from "./CTA";

const SectionContent = (props) => {
  return (
    <>
      <Container sectionNumber={props.sectionNumber}>
        <Title>{props.Title}</Title>
        <Content>{props.Content}</Content>
        {props.isCTA && <CTA />}
      </Container>
    </>
  );
};

export default SectionContent;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;

  &::after {
    position: absolute;
    content: "${(props) => props.sectionNumber}";
    font-family: "Oswald";
    font-size: 96px;
    font-weight: 600;
    letter-spacing: 8px;
    color: white;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    height: 116px;
  }
`;

export const Title = styled.h3`
  display: inline;
  width: min-content;
  position: relative;
  font-family: "Oswald";
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 4px;
  color: white;
  margin: 0;

  &::after {
    position: absolute;
    content: "";
    display: block;
    margin-top: 16px;
    height: 1px;
    width: 50%;
    background-color: white;
    opacity: 0.3;
  }
`;
export const Content = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 20px;
  margin: 32px 0 0 0;
`;
