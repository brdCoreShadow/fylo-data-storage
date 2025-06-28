import styled from "@emotion/styled";

export const SummaryCon = styled.div`
  position: relative;

  padding-top: 32px;
  padding-bottom: 52px;
  padding-left: 32px;
  padding-right: 32px;

  background-color: #1e2d69;
  color: #dbd9ff;

  border-radius: 12px;

  @media (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  & > h3 {
    margin-bottom: 16px;

    font-size: 14px;
    font-weight: 400;

    & span {
      font-weight: 700;
    }
  }

  .scale-container {
    width: 260px;
    height: 20px;

    padding: 3px;

    margin-bottom: 12px;

    background-color: #0c122c;
    border-radius: 15px;

    @media (min-width: 1280px) {
      width: 540px;
    }
  }

  .scale-bar {
    height: 100%;
    width: 85%;
    background: linear-gradient(to right, #ffb199, #ff0844);
    border-radius: 15px;
    position: relative;
  }

  .indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-2px, -50%);
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const StorageCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > p {
    font-size: 12px;
    font-weight: 700;
  }
`;

export const LeftCon = styled.div`
  position: absolute;

  bottom: 0;
  left: 50%;

  transform: translate(-50%, 50%);

  width: 55%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 16px;
  padding-bottom: 16px;

  background-color: #fff;

  border-radius: 12px;

  @media (min-width: 1280px) {
    position: absolute;

    top: 0;
    right: 0;

    transform: translate(40%, -60%);

    width: 179px;
    height: 72px;

    border-bottom-right-radius: 0;
  }

  & > h4 {
    margin-right: 8px;

    font-size: 40px;

    color: #0c122c;
  }

  & > p {
    font-size: 12px;
    font-weight: 700;

    color: #979797;
  }
`;

export const Triangle = styled.div`
  display: none;

  width: 0;
  height: 0;
  border-top: 23px solid white;
  border-left: 23px solid transparent;

  @media (min-width: 1280px) {
    position: absolute;

    bottom: 0;
    right: 0;

    transform: translate(0, 100%);

    display: block;
  }
`;
