import styled from "styled-components";
import Button from "../../03-organisms/ButtonsComponents/Button";

export default function ButtonComponent() {
  return (
    <>
      <ButtonComponentContainer>
        <ButtonsWrapper>
          <ButtonsRow>
            <Button Title="<Button />" />
          </ButtonsRow>

          <ButtonsRow>
            <Button Title="<Button Outline/>" Outline />
          </ButtonsRow>

          <ButtonsRow>
            <Button
              Title="<Button DisableShadow Primary/>"
              DisableShadow
              Primary
            />
          </ButtonsRow>

          <ButtonsRow>
            <Button Title="<Button Primary IconLeft/>" Primary IconRight />
            <Button Title="<Button Primary IconRight/>" Primary IconLeft />
          </ButtonsRow>

          <ButtonsRow>
            <Button Title="<Button Primary Small/>" Primary Small />
            <Button Title="<Button Primary/>" Primary />
            <Button Title="<Button Primary Big/>" Primary Big />
          </ButtonsRow>

          <ButtonsRow>
            <Button Title="<Button Secondary/>" label="Secondary" Secondary />
            <Button Title="<Button Danger/>" label="Danger" Danger />
          </ButtonsRow>
        </ButtonsWrapper>
      </ButtonComponentContainer>
    </>
  );
}

export const ButtonComponentContainer = styled.div`
  width: calc(100% - 24rem);
  margin-left: 24rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 32px;
`;
