import { HeaderEmployees, TableNames } from "../assets/Styles/Home";
import { VscCircleFilled } from "react-icons/vsc";

const TableHeaderInDesktopMode = () => {
  return (
    <HeaderEmployees>
      <TableNames style={{ width: "80px" }}>FOTO</TableNames>
      <TableNames >NOME</TableNames>
      <TableNames style={{ width: "30px" }}>
        <VscCircleFilled style={{ color: "#ffffff" }} />
      </TableNames>
    </HeaderEmployees>
  );
};

export default TableHeaderInDesktopMode;
