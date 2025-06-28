import styled from "@emotion/styled";

import bgMobile from "./assets/images/bg-mobile.png";
import bgDesk from "./assets/images/bg-desktop.png";

export const AppCon = styled.div`
  height: 100vh;

  align-content: center;

  background-color: #0f1b3d;
  background-image: url(${bgMobile});
  background-size: cover;

  @media (min-width: 1280px) {
    background-image: url(${bgDesk});
  }
`;
