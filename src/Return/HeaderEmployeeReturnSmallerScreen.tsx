import { HeaderEmployees, TableNames } from "../assets/StylesPages/Home";
import { VscCircleFilled } from "react-icons/vsc";

const HeaderEmployeeReturnSmallerScreen = () => {
  return (
    <HeaderEmployees>
      <TableNames style={{ width: "80px" }}>FOTO</TableNames>
      <TableNames>NOME</TableNames>
      <TableNames style={{ width: "80px" }}>
        <VscCircleFilled style={{ color: "#ffffff" }} />
      </TableNames>
    </HeaderEmployees>
  );
};

export default HeaderEmployeeReturnSmallerScreen;
