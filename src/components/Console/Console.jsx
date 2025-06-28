import * as SC from "./ConsoleStyled";

import Logo from "../Logo/Logo";

import docIcon from "../../assets/images/icon-document.svg";
import folderIcon from "../../assets/images/icon-folder.svg";
import uploadIcon from "../../assets/images/icon-upload.svg";

const Console = () => {
  return (
    <SC.ConsoleCon>
      <Logo />
      <SC.OptionList>
        <li>
          <img src={docIcon} alt="docs" />
        </li>
        <li>
          <img src={folderIcon} alt="folder" />
        </li>
        <li>
          <img src={uploadIcon} alt="upload" />
        </li>
      </SC.OptionList>
    </SC.ConsoleCon>
  );
};

export default Console;
