import styled from "@emotion/styled";

export const SharedLayoutCon = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;

    padding: 0;

    & > *:first-of-type {
      margin-right: 32px;
    }
  }
`;
