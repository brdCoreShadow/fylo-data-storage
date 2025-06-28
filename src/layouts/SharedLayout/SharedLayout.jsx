import * as SC from "./SharedLayoutStyled";

import Console from "../../components/Console/Console";
import Summary from "../../components/Summary/Summary";

const SharedLayout = () => {
  return (
    <SC.SharedLayoutCon>
      <Console />
      <Summary/>
    </SC.SharedLayoutCon>
  );
};

export default SharedLayout;
