import styled, { css } from "styled-components";
import { colorsRoles } from "../../01-atoms/colors";
import { AddCardIcon } from "../../01-atoms/icons";

const Button = ({ disabled, colorPrimary, ...props }) => {
  return (
    <ButtonBoxe>
      <ButtonTitle isHoverFocus={props.isHoverFocus}>{props.Title}</ButtonTitle>

      <ButtonWrapper disabled={disabled} colorPrimary={colorPrimary} {...props}>
        <AddCardIcon fillColor={colorsRoles.FontWhite} />
        {props.label ? props.label : "Default"}
      </ButtonWrapper>
    </ButtonBoxe>
  );
};

export default Button;

export const ButtonBoxe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  margin: 0;
  margin-bottom: 8px;
  color: ${(props) => (props.isHoverFocus ? colorsRoles.DisableGrey : "black")};
`;

export const ButtonWrapper = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.8px;
  line-height: 20px;
  text-align: center;
  background-color: ${colorsRoles.PrimaryGrey};
  cursor: pointer;

  & > svg {
    width: 13.2px;
    display: none;
    color: ${colorsRoles.FontWhite};
  }

  &:hover,
  &:focus {
    filter: brightness(0.8);
  }

  ${(props) => {
    return (
      props.Disabled &&
      css`
        color: ${colorsRoles.DisableGrey};
      `
    );
  }}

  ${(props) => {
    return (
      props.Primary &&
      css`
        color: ${colorsRoles.FontWhite};
        background-color: ${colorsRoles.PrimaryBLue};
      `
    );
  }}

${(props) => {
    return (
      props.Secondary &&
      css`
        color: ${colorsRoles.FontWhite};
        background-color: ${colorsRoles.SecondaryBlue};
      `
    );
  }}

${(props) => {
    return (
      props.Outline &&
      css`
        color: ${colorsRoles.PrimaryBLue};
        background-color: ${colorsRoles.FontWhite};
        border: 1px solid ${colorsRoles.PrimaryBLue};
        &:hover,
        &:focus {
          filter: none;
          background-color: ${colorsRoles.PrimaryBLue}20;
        }
      `
    );
  }}

${(props) => {
    return (
      props.Danger &&
      css`
        color: ${colorsRoles.FontWhite};
        background-color: ${colorsRoles.Danger};
      `
    );
  }}

${(props) => {
    return (
      props.Small &&
      css`
        padding: 6px 12px;
      `
    );
  }}

${(props) => {
    return (
      props.Big &&
      css`
        padding: 11px 22px;
      `
    );
  }}

${(props) => {
    return (
      props.IconLeft &&
      css`
        flex-direction: row-reverse;
        & svg {
          display: inherit;
          margin-left: 8px;
        }
      `
    );
  }}

${(props) => {
    return (
      props.IconRight &&
      css`
        & svg {
          display: inherit;
          margin-right: 8px;
        }
      `
    );
  }}

${(props) => {
    return (
      props.Text &&
      css`
        background-color: transparent;
        box-shadow: none;
        color: ${colorsRoles.PrimaryBLue};
        &:hover,
        &:focus {
          filter: brightness(1);
          background-color: ${colorsRoles.PrimaryBLue}20;
        }
      `
    );
  }}

${(props) => {
    return (
      props.DisableShadow &&
      css`
        box-shadow: none;
      `
    );
  }}
`;
