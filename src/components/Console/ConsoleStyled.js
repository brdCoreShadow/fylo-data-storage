import styled from "@emotion/styled";

export const ConsoleCon = styled.div`
  margin-bottom: 16px;

  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;

  text-align: left;

  background-color: #1e2d69;

  border-radius: 12px;

  border-top-right-radius: 128px;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 32px;

  & > li {
    height: 48px;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 14px;
    padding-right: 14px;

    align-content: center;

    background-color: #0c122c;

    border-radius: 12px;
    &:not(:last-of-type) {
      margin-right: 16px;
    }
  }
`;
