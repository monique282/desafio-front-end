import { TableData } from "../assets/Styles/Home";
import React from "react";
import { SlArrowDown } from "react-icons/sl";

const TableDataSlArrowDownReturn: React.FC<{
  id: string;
  toggleItem: (id: string) => void;
}> = ({ id, toggleItem }) => {
  return (
    <TableData style={{ width: "30px" }}>
      <SlArrowDown
        style={{ color: "#594ed2" }}
        onClick={() => {
          toggleItem(id);
        }}
      />
    </TableData>
  );
};

export default TableDataSlArrowDownReturn;
